import Delivery from "../../../db/models/Delivery";
import User from "../../../db/models/User";
import Token from "../../../db/models/Token";
import { connectMongo } from "../../../db/connectDb";

import { ObjectId } from "mongodb";

// Next
import Image from "next/image";
import { getToken } from "next-auth/jwt";

import { DELIVERY, EKONT } from "../../../components/cart/cartCostants";
import sendEmail from "../sendEmail";

const secret = process.env.NEXTAUTH_SECRET;
// Utils
import createDeliveryMessage from "../../../utils/deliveryMessCart";

export default async function handler(req, res) {
  const { cart, inputs, deliveryInfo, invoice } = req.body;
  console.log(cart, inputs, deliveryInfo);
  try {
    let subTotal = parseFloat(
      cart
        .map((item) => {
          return item.item.price * item.qty;
        })
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
    );
    let totalPrice = subTotal;

    await connectMongo();

    const userToken = await getToken({ req, secret });
    if (!userToken) {
      throw {
        error: "Невалиден токен",
      };
    }
    const user = await User.findOne({ email: userToken.email });
    if (!user) {
      throw {
        error: "Невалиден акаунт",
      };
    }

    for (let [key, value] of Object.entries(inputs)) {
      if (key != "comment" && key != "typeOfPayment") {
        if (value == "" || value.length === 0) {
          throw {
            error: "Пратени са невалидни данни",
          };
        }
      }
    }
    if (
      inputs.address.phoneNumber?.length === 0 ||
      inputs.address.phoneNumber == null ||
      inputs.address.fullName.length === 0
    ) {
      throw {
        error: "Пратени са невалидни данни",
      };
    }
    if (inputs.typeOfDelivery == DELIVERY) {
      if (
        deliveryInfo.office == "Избери квартал" ||
        deliveryInfo.city.name != "София" ||
        totalPrice < 300
      ) {
        throw {
          error: "Изберете квартал и град",
        };
      }
    }

    let data = {
      cart: [...cart],
      totalPrice,
      ownerId: user._id,
      typeOfDelivery: inputs.typeOfDelivery,
      comment: inputs.comment,
      invoice,
    };
    if (inputs.typeOfDelivery == DELIVERY) {
      const address = inputs.address;
      data.addressInfo = {
        name: address.fullName,
        telephone: address.phoneNumber,
        address: `${deliveryInfo.quarter.name} ${address.address}`,
        city: deliveryInfo.city.name,
      };
    }
    if (inputs.typeOfDelivery == EKONT) {
      if (inputs.address?.office) {
        if (!inputs.address.office) throw { error: "Невалиден офис" };
        // Write needed data when is for office to EKONT
      }
      if (inputs.address?.address) {
        if (!inputs.address.address) throw { error: "Невалиден адрес" };

        // Write needed data when is for address to EKONT
      }
      // Send to ekont needed data
    }

    // Loop through all products
    const delivery = await Delivery.create(data);

    const qrCodeObj = {
      adminPanel: `${process.env.NEXTAUTH_URL}/adminPanel#dostavki${inputs.typeOfDelivery}#${delivery._id}`,
    };
    const text = `Успешна направена поръчка - Ивда Гео`;
    const message = await createDeliveryMessage(text, cart, qrCodeObj);

    sendEmail(
      process.env.EMAIL_SEND,
      user.email,
      "Направена поръчка в Ивда Гео",
      message
    );
    const adminMess = await createDeliveryMessage(
      `Нова поръчка в Ивда Гео Paint - online`,
      cart,
      qrCodeObj,
      true
    );

    // Must send to ivdageopaint bg
    sendEmail(
      process.env.EMAIL_SEND,
      process.env.EMAIL_SEND,
      "Нова поръчка",
      adminMess
    );
    res.json({ message: "Успешно направена поръчка" });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
}
