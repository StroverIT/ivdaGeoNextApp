import { connectMongo } from "../../db/connectDb";
import mongoose from "mongoose";

import Product from "../../db/models/Product";
import { translationToRoute } from "../../utils/translationToRoute";

export default async function handler(req, res) {
  await connectMongo();
  let search = {
    items: [],
    articleNames: [],
    sections: [],
  };
  try {
    const { input } = req.body;
    let options = {
      $regex: new RegExp(`^${input}.*`),
      $options: "i",
    };

    let items = await Product.findOne({
      "products.sectionName": options,
    }).exec();

    mongoose.connection.close();

    items.products.forEach((section) => {
      const isFound = section.sectionName
        .toLowerCase()
        .includes(input.toLowerCase());
      if (isFound) {
        search.items.push({
          sectionName: section.sectionName,
          imageUrl: section.imageUrl,
          route: `${translationToRoute(items.section)}/${section._id}#${
            section.articles[0]._id
          }#${section.articles[0].items[0]._id}`,
          id: section._id,
        });
      }
    });

    // search.items = search.items.slice(0, 10);
    search.items = search.items.slice(0, 10);

    res.json(search);
  } catch (e) {
    console.log(e);
    res.json(search);
  }
}
