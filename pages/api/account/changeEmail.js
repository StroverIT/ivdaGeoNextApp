import { MongoClient, ObjectId } from "mongodb";
import { compare } from "bcryptjs";
async function handler(req, res) {
  const email = req.body.email;
  const pass = req.body.password;
  const id = req.body._id;

  //Connect with database
  if (req.method == "POST") {
    const client = await MongoClient.connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db();
    const collection = db.collection("users");

    const user = await collection.findOne({
      _id: ObjectId(id),
    });
    const isFoundEmail = await collection.findOne({
      email: email,
    });
    console.log(isFoundEmail);
    if (isFoundEmail) {
      return res
        .status(409)
        .json({ message: "Вече съществува такъв и-мейл", isErr: true });
    }
    // No user found
    if (!user) {
      client.close();

      return res
        .status(404)
        .json({ message: "Грешно пратени данни", isErr: true });
    }

    const checkPassword = await compare(pass, user.password);

    if (!checkPassword) {
      client.close();

      return res.status(401).json({ message: "Грешна парола", isErr: true });
    }

    collection.updateOne({ _id: ObjectId(id) }, { $set: { email } });
    return res.json({ message: "И-мейла ви беше сменен успешно" });
  }
}
export default handler;