import { Schema, model, models } from "mongoose";

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
  imageUrl: {
    type: String,
  },
  description: {
    type: [{ type: String }],
  },
  itemUnit: { type: String },
  totalBoughtProducts: { type: Number, default: 0 },
  articles: [articlesScheme],
});
const sectionScheme = new Schema({
  section: String,
  products: [{ productScheme }],
});
const Product = models.Product || model("Product", sectionScheme);

export default Product;
