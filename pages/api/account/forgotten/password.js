// Mongodb
import { connectMongo } from "../../../../db/connectDb";
import mongoose from "mongoose";
import User from "../../../../db/models/User";

// Validators
import { emailVal } from "../../../../utils/validationHandler";

async function handler(req, res) {
  //Connect with database
  if (req.method == "POST") {
    const errors = [];
    const { email } = req.body;
    // Validators
    const emailCheck = emailVal(email);
    if (!emailCheck.result) errors.push(emailCheck.message);
    // Connecting to mongodb
    await connectMongo();
    // Checking for user
    const user = await User.findOne({ email });
    console.log(user);
    // If no user
    if (!user) {
      errors.push("Няма акаунт с такъв и-мейл");
    }
    // If are errors
    if (errors.length > 0) {
      return res.status(403).json(errors);
    }
    // Create Token

    // Add token to user

    // MUST SEND A PASSWORD page to change password with token URL
    mongoose.connection.close();
    return res.status(201).json({ message: "PBRAVO" });
  }
}
export default handler;
