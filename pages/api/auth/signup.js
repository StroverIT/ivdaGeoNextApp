import { connectMongo } from "../../../db/connectDb";
import mongoose from "mongoose";
import User from "../../../db/models/User";

import valHandler from "../../../utils/validationHandler";
import { hash } from "bcryptjs";

async function handler(req, res) {
  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const { email, password, repeatPassword, name } = req.body;
    const errors = [];
    //Validate
    if (!email || !password) {
      errors.push("Всички полета трябва да бъдат попълнени");
      return;
    }
    const fullName = valHandler.fullName(name);
    const emailFormat = valHandler.email(email);
    if (!emailFormat.result) {
      errors.push(emailFormat.message);
    }
    if (!fullName.result) {
      errors.push(fullName.message);
    }
    //Connect with database
    await connectMongo();
    //Check existing
    const checkExisting = await User.findOne({ email: email });
    //Send error response if duplicate user is found
    if (checkExisting) {
      errors.push("Вече съществува такъв и-мейл");
    }
    if (repeatPassword != password) {
      errors.push("Паролите трябва да съвпадат");
    }

    if (errors.length > 1) {
      res.status(406).json(errors);
    }

    // const status = await User.create({
    //   email,
    //   password: await hash(password, 12),
    //   name,
    // });
    //Send success response
    // res.status(201).json({ message: "success", ...status });
    //Close DB connection
    mongoose.connection.close();
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Нещо се обърка..." });
  }
}

export default handler;
