import React from "react";

// NextJs
import Image from "next/image";
import Link from "next/link";
//Components
import Pricing from "../../priceStyling/Pricing";
import BuyBtn from "../../base/BuyBtn";

export default function Product({
  article,
  item,
  itemUnit,
  sectionName,
  addProduct,
  imageUrl,
  sectionRoute,
  section,
}) {
  const price = item?.price.toFixed(2).split(".");
  item.articleName = `${sectionName} ${article.articleName} - ${item.weight} ${
    itemUnit ? itemUnit : ""
  }`;
  item.sectionName = sectionName;
  item.imageUrl = imageUrl;

  return (
    <section className="flex items-center mb-5 border border-gray">
      <div className="w-full ">
        <div className="items-center h-full ">
          {imageUrl && (
            <Link
              href={`/products/${sectionRoute}/${section._id}#${article._id}#${item._id}`}
            >
              <div className="relative flex items-center justify-center w-full h-64 cursor-pointer ">
                <Image
                  src={`/uploads/${imageUrl && imageUrl}`}
                  layout="fill"
                  alt={`${item.articleName}`}
                  className="object-contain"
                />
              </div>
            </Link>
          )}
        </div>
        <div className="container text-center border-y border-gray">
          <div className="">
            <Pricing price={price[0]} priceDec={price[1]} size="2xl" />
          </div>
          {/* Create grayer color for future*/}
        </div>
        <div className="container py-5 text-center">
          <div className="">
            <Link href={`/products/${sectionRoute}/${item._id}`}>
              <h2 className="text-lg cursor-pointer">{item.articleName}</h2>
            </Link>
          </div>
          <div className="py-5 text-sm text-green-300">
            Безплатна доставка при поръчка над 300 лв.
          </div>
        </div>
      </div>
    </section>
  );
}
