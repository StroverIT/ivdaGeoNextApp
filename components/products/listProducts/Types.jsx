import React, { useState } from "react";

import { useRouter } from "next/router";

const Types = ({ data, itemUnit }) => {
  const router = useRouter();
  const path = router.asPath.split("/");
  const section = path[2];
  const [subId, articleId, itemId] = path[3].split("#");

  const [article, setArticle] = useState(
    data?.find((article) => article._id == articleId)
  );
  const changeArticle = (routerArticle) => {
    router.push(
      `/products/${section}/${subId}#${routerArticle._id}#${routerArticle.items[0]._id}`,
      undefined,
      { shallow: true }
    );
    setArticle(routerArticle);
  };
  const changeItem = (item) => {
    router.push(
      `/products/${section}/${subId}#${article._id}#${item._id}`,
      undefined,
      { shallow: true }
    );
  };
  return (
    <section className="">
      <div className="flex flex-wrap justify-center mb-10 gap-y-2 gap-x-2">
        {data &&
          data.map((article) => {
            return (
              <div
                key={article._id}
                className={`inline-block px-8 text-center border cursor-pointer w-max  transition-transform text-sm ${
                  articleId == article._id
                    ? "bg-primary-lighter text-white border-primary-lighter"
                    : "hover:-translate-y-1 border-gray bg-white"
                }`}
                onClick={() => changeArticle(article)}
              >
                {article.articleName}
              </div>
            );
          })}
      </div>
      <div className="flex flex-wrap justify-center gap-y-2 gap-x-2">
        {article &&
          article.items.map((item) => {
            return (
              <div
                key={item._id}
                className={`inline-block px-8 text-center border cursor-pointer w-max  transition-transform text-sm ${
                  item._id == itemId
                    ? "bg-orange text-white border-orange"
                    : "hover:-translate-y-1 border-gray bg-white"
                }`}
                onClick={() => changeItem(item)}
              >
                {item.weight} {itemUnit}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Types;
