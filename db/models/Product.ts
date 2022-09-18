import { Schema, model, models, Model } from "mongoose";

interface IBrand {
  imageUrl: string;
  name: string;
}
interface IItems {
  weight: string;
  price: number;
  boughts: number;
}

interface IArticle {
  articleName: string;
  items: [IItems];
  totalItemBoughts: number;
}
interface IProduct {
  sectionName: string;
  imageUrl: string;
  description: Object;
  itemUnit: string;
  totalBoughtProducts: number;
  articles: [IArticle];
  brand: [IBrand];
}
const brandSchema = new Schema<IBrand>({
  imageUrl: String,
  name: String,
});
// Item
const itemScheme = new Schema<IItems>({
  weight: String,
  price: Number,
  boughts: { type: Number, default: 0 },
});
// Article
const articlesScheme = new Schema<IArticle>({
  articleName: {
    type: String,
  },

  items: [itemScheme],
  totalItemBoughts: { type: Number, default: 0 },
});
// Section
const productScheme = new Schema<IProduct>({
  sectionName: {
    type: String,
  },
  imageUrl: String,
  description: {
    type: [{ type: String }],
  },
  itemUnit: { type: String },
  totalBoughtProducts: { type: Number, default: 0 },
  articles: [articlesScheme],
  brand: brandSchema,
});
const sectionScheme = new Schema({
  section: String,
  products: [productScheme],
});
const Product =
  (models.Product as Model<IProduct>) ||
  model<IProduct>("Product", sectionScheme);

export default Product;
