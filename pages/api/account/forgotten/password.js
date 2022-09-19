// Mongodb
import { connectMongo } from "../../../../db/connectDb";
import { ObjectId } from "mongodb";

import mongoose from "mongoose";
import User from "../../../../db/models/User";
import Token from "../../../../db/models/Token";
// Validators
import { emailVal } from "../../../../utils/validationHandler";

import sendEmail from "../../sendEmail";

async function handler(req, res) {
  //Connect with database
  if (req.method == "POST") {
    const errors = [];
    const { email } = req.body;

    const emailCheck = emailVal(email);
    if (!emailCheck.result) {
      errors.push("Невалиден формат на и-мейл");
    }
    // Connecting
    await connectMongo();
    const user = await User.findOne({ email });
    if (!user) {
      errors.push("Не е намерен такъв и-мейл");
    }
    // If are errors
    if (errors.length > 0) {
      return res.status(403).json(errors);
    }
    // Create Token
    let token = await Token.findOne({ userId: ObjectId(user._id) });
    if (!token) {
      token = await Token.create({
        userId: user._id,
        token: new ObjectId(),
      });
    }
    // Add token to user

    // MUST SEND A PASSWORD page to change password with token URL
    const message = `
      <h2>За сменяне на паролата в IvdaGeo.bg.</h2>
      <a href="${process.env.HOST_URL}/account/changePassword/${user._id}/${token.token}">Отворете тук</a>
      `;
    // Sending email
    await sendEmail(
      process.env.EMAIL_SEND,
      email,
      "Смяна на парола IvdaGeo",
      message
    );
    mongoose.connection.close();
    return res
      .status(201)
      .json({ message: "Успешно изпратена заявка. Вижте си и-мейла" });
  }
}
export default handler;
