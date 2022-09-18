import { connectMongo } from "../db/connectDb";
import mongoose from "mongoose";

import Product from "../db/models/Product";
// Utils
import {
  translationToDb,
  translationToRoute,
} from "../utils/translationToRoute";

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
  for (let article of data.products) {
    filteredData.alternatives.push({
      sectionName: article.sectionName,
      imageUrl: article.imageUrl,
      route: `/products/${translationToRoute(data.section)}/${article._id}#${
        article.articles[0]._id
      }#${article.articles[0].items[0]._id}`,
    });
  }

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
