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
    const address = inputs.address;

    if (inputs.typeOfDelivery == DELIVERY) {
      data.addressInfo = {
        name: address.fullName,
        telephone: address.phoneNumber,
        address: `${deliveryInfo.quarter.name} ${address.address}`,
        city: deliveryInfo.city.name,
      };
    }
    if (inputs.typeOfDelivery == EKONT) {
      const senderClient = {
        name: "Gergana Lazarova",
        phones: ["0879406621"],
      };
      const senderAddress = {
        city: {
          country: {
            code3: "BGR",
          },
          name: "София",
          postCode: "1000",
          num: deliveryInfo.quarter.id,
        },
        street: "Дружба 2",
        other: "гр.София ПК-1582 Дружба 2 РУМ Дружба 2 срещу блок 204",
      };
      const ekontData = {
        label: {
          senderClient,
          senderAddress,
          receiverClient: {
            name: address.fullName,
            phones: [address.phoneNumber],
          },
          receiverAddress: {
            city: {
              country: {
                code3: "BGR",
              },
              name: deliveryInfo.city.name,
              postCode: deliveryInfo.city.postCode,
            },
            street: deliveryInfo.quarter.name,
            num: deliveryInfo.quarter.id,
            other: address.address,
          },
          weight: 50,
          packCount: 1,
          shipmentDescription: "Баки",
          shipmentType: "PACK",
        },
        mode: "create",
      };
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ekontData),
      };
      if (inputs.address?.office) {
        if (inputs.address.office == "Избери офис")
          throw { error: "Невалиден офис" };
        data.addressInfo = {
          name: user.fullName,
          telephone: user.telephone || address.phoneNumber,
          address: `Office: ${address.office}`,
        };
      }
      if (inputs.address?.address) {
        if (inputs.address.address == "Избери квартал")
          throw { error: "Невалиден адрес" };
        // const ekontAddRes = await fetch(
        //   "https://ee.econt.com/services/Shipments/LabelService.createLabel.json",
        //   options
        // );
        // const ekontAddJson = await ekontAddRes.json();
        // ekontAddJson?.innerErrors?.forEach((firstError) => {
        //   console.log(firstError);
        // });
        data.addressInfo = {
          name: user.fullName,
          telephone: user.telephone || address.phoneNumber,
          address: `Квартал: ${deliveryInfo.quarter.name} ; ${address.address}`,
        };
      }
      // Send to ekont needed data
    }

    const delivery = await Delivery.create(data);

    // const qrCodeObj = {
    //   adminPanel: `${process.env.NEXTAUTH_URL}/adminPanel#dostavki${inputs.typeOfDelivery}#${delivery._id}`,
    // };

    // const text = `${user.fullName}, успешно направихте поръчка! - Ивда Гео Paint online`;
    // const message = await createDeliveryMessage(text, cart, qrCodeObj);

    // sendEmail(
    //   process.env.EMAIL_SEND,
    //   user.email,
    //   "Направена поръчка в Ивда Гео",
    //   message
    // );
    // const adminMess = await createDeliveryMessage(
    //   `Нова поръчка в Ивда Гео Paint - online`,
    //   cart,
    //   qrCodeObj,
    //   true
    // );

    // Must send to ivdageopaint bg
    // sendEmail(
    //   process.env.EMAIL_SEND,
    //   process.env.EMAIL_SEND,
    //   "Нова поръчка",
    //   adminMess
    // );
    res.json({ error: "Успешно направена поръчка" });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
}
