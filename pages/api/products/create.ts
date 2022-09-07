import type { NextApiRequest, NextApiResponse } from "next";
import {
  parseForm,
  FormidableError,
} from "../../../lib/createProduct/parse-form";
// Inner functions
import imageGetSanitizer from "../../../lib/createProduct/imageGetSanitizer";
import articlesFormater from "../../../lib/createProduct/articlesFormater";
// Mongoose
import { connectMongo } from "../../../db/connectDb";
import Product from "../../../db/models/Product";
import User from "../../../db/models/User";

// Token
import { getToken } from "next-auth/jwt";
const secret = process.env.NEXTAUTH_SECRET;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{
    data: {
      url: string | string[];
    } | null;
    error: string | null;
  }>
) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({
      data: null,
      error: "Method Not Allowed",
    });
    return;
  }
  // Just after the "Method Not Allowed" code
  try {
    let { fields, files }: { fields: any; files: any } = await parseForm(req);
    await connectMongo();

    const token = await getToken({ req, secret });
    if (!token) {
      throw {
        error: "Невалиден токен!",
      };
    }
    const user = await User.findOne({ email: token.email });
    if (!user) {
      throw {
        error: "Невалиден акаунт",
      };
    }

    if (user.role != "admin") {
      throw {
        error: "Нямате такива права!",
      };
    }
    const sectionImg = files.media || null;
    let articleImg = [];
    let itemImg = [];

    if (sectionImg) {
      fields.imageUrl = sectionImg.newFilename;
    }
    if (files.article) {
      articleImg = imageGetSanitizer(files.article);
    }
    if (files.item) {
      itemImg = imageGetSanitizer(files.item);
    }

    // Articles set image
    let formatedFields = articlesFormater(fields, articleImg, itemImg);

    await Product.create(formatedFields);
    // const product = new Product(formatedFields).save();
    let data: { message: string; error: any; data: any } = {
      message: "Успешно създадена секция",
      error: null,
      data: "Nqmna brat",
    };

    res.status(200).json(data);
  } catch (e) {
    if (e.error) {
      return res.status(400).json(e.error);
    }
    if (e instanceof FormidableError) {
      res.status(e.httpCode || 400).json({ data: null, error: e.message });
    } else {
      console.error(e);
      res.status(500).json({
        data: null,
        error: "Сървърни проблеми, обадете се на телефон: 0876237725",
      });
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
