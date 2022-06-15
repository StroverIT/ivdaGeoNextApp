import { MongoClient } from "mongodb";
import { hash } from "bcryptjs";
async function handler(req, res) {
  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const { email, password, name } = req.body;
    //Validate
    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Неправилно валидинари данни" });
      return;
    }
    //Connect with database
    const client = await MongoClient.connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db();
    //Check existing
    const checkExisting = await db
      .collection("users")
      .findOne({ email: email });
    //Send error response if duplicate user is found
    if (checkExisting) {
      res.status(422).json({ message: "Вече съществува такъв акаунт" });
      client.close();
      return;
    }
    //Hash password
    const status = await db.collection("users").insertOne({
      email,
      password: await hash(password, 12),
      name,
      verified: false,
    });
    //Send success response
    res.status(201).json({ message: "success", ...status });
    //Close DB connection
    client.close();
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Нещо се обърка..." });
  }
}

export default handler;
