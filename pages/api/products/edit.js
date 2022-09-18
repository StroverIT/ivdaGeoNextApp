import { connectMongo } from "../../../db/connectDb";
import User from "../../../db/models/User";
import Product from "../../../db/models/Product";
import { ObjectId } from "mongodb";

import { getToken } from "next-auth/jwt";
const secret = process.env.NEXTAUTH_SECRET;

async function handler(req, res) {
  try {
    const token = await getToken({ req, secret });

    if (!token) {
      throw {
        error: "Невалиден токън",
      };
    }

    await connectMongo();

    const user = await User.findOne({ email: token.email });

    if (!user || user.role != "admin") {
      throw {
        error: "Нямате такива права",
      };
    }

    const { data, productId, sectionId, productIdx } = req.body;
    console.log(data);
    await Product.updateOne(
      { "products._id": ObjectId(productId) },
      { $set: { "products.$[i]": data } },
      { arrayFilters: [{ "i._id": { $eq: ObjectId(productId) } }] }
    );
    /*
      { "subsection._id": ObjectId(id) }, 

      { $set: { [`subsection.$[i].${itemKey}`]: itemValue } }, 

    {arrayFilters: [{"i._id": {$eq: ObjectId(id)}}]}, 
    
    
    */

    res.json({ message: "Успешно променихте продукта" });
  } catch (e) {
    console.log(e);
    res.json({ error: e?.error });
  }
}

export default handler;
