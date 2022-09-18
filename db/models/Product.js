import { Schema, model, models } from "mongoose";

const brandSchema = new Schema({
  imageUrl: String,
  name: String,
});
// Item
const itemScheme = new Schema({
  weight: String,
  price: Number,
  boughts: { type: Number, default: 0 },
});
// Article
const articlesScheme = new Schema({
  articleName: {
    type: String,
  },

  items: [itemScheme],
  totalItemBoughts: { type: Number, default: 0 },
});
// Section
const productScheme = new Schema({
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
const Product = models.Product || model("Product", sectionScheme);

export default Product;
