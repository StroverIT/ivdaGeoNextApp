import { connectMongo } from "../db/connectDb";
import mongoose from "mongoose";

import Product from "../db/models/Product";
// Utils
import { translationToDb } from "../utils/translationToRoute";

export const getAllProducts = async (sectionName, filter) => {
  await connectMongo();
  // for case insensitive
  const section = translationToDb(sectionName);
  return Product.findOne({
    section: {
      $regex: new RegExp(section, "i"),
    },
  });
};
export const getAll = async () => {
  const options = { method: "GET" };
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/getAll`,
    options
  );
  const data = await res.json();
  return data;
};

export const productByItemId = async (section, productSectionId) => {
  await connectMongo();
  const translated = translationToDb(section);

  let data = await Product.findOne({
    section: { $regex: new RegExp(translated, "i") },
  }).lean();

  const filteredData = {
    foundItem: {},
    alternatives: [],
  };

  inner: for (let article of data.products) {
    if (article._id == productSectionId) {
      filteredData.foundItem = article;
      break inner;
    }
  }
  // for (let i = 0; i < 5; i++) {
  //   const article = data.articles[i];
  //   if (!article) break;

  //   const item = article.items[0];

  //   filteredData.alternatives.push({
  //     articleName: article.articleName,
  //     item: item,
  //   });
  // }
  console.log(filteredData);
  return filteredData;
};

export const getAllLatestTen = async () => {
  await connectMongo();
  // Local
  // const data = await Product.findOne({ _id: "62dea6f488620a9fd35bbcec" });

  // This is for ivdaGeo
  const data = await Product.findOne({ _id: "62e1b3bfc2e0d00808f15e34" });

  // const data = await Product.find().sort({ _id: -1 }).limit(10);

  return data;
};
export const getBySection = async (sectionName, filter) => {
  await connectMongo();
  // for case insensitive
  return Product.find({
    sectionName: { $regex: new RegExp(sectionName, "i") },
  });
};
