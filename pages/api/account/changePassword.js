import { MongoClient, ObjectId } from "mongodb";
import { compare, hash } from "bcryptjs";

async function handler(req, res) {
  const id = req.body._id;
  const currPass = req.body.currentPassword;
  const newPass = req.body.newPassword;
  const newPassConf = req.body.newPasswordConf;

  console.log(req.body);
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
    if (!user) {
      return res.status(404).json({ message: "Невалидни данни", isErr: true });
    }
    const checkPassword = await compare(currPass, user.password);

    if (!checkPassword) {
      return res.status(406).json({ message: "Грешна парола", isErr: true });
    }
    if (newPass != newPassConf) {
      return res
        .status(406)
        .json({ message: "Паролите трябва да съвпадата", isErr: true });
    }
    collection.updateOne(
      { _id: ObjectId(id) },
      { $set: { password: await hash(newPassConf, 12) } }
    );
    res.status(201).json({ message: "Паролата ви беше сменена успешно!" });
  }
}
export default handler;
