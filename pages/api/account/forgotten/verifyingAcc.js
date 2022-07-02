import { MongoClient } from "mongodb";

async function handler(req, res) {
  //Connect with database
  if (req.method == "POST") {
    return res.status(201).json({ success });
  }
}
export default handler;
