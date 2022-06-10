import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.DB_HOST);
  const db = client.db();
  const collection = db.collection("users");
  const data = await collection.findOne({
    email: req.body.email,
    name: req.body.name,
  });
  res.json(data);
}
