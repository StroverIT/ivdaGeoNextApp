import React, { useState, useEffect } from "react";
// Nextjs
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
// Icons
import { AiOutlineHeart } from "react-icons/ai";
// Styling
import style from "../../../../styles/products/showProduct.module.css";
// Components
import ThumbsGallery from "../../../../components/swiperJs/ThumbsGallery";
import Pricing from "../../../../components/priceStyling/Pricing";
import { productByItemId } from "../../../../services/productService";
import AddProductInput from "../../../../components/products/AddProductInput";
import Types from "../../../../components/products/listProducts/Types";

// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/actions/productActions";

// Utils
import productFormater from "../../../../utils/productFormater";

// Notifications
import {
  toastProduct,
  toastPromise,
  toastSuccess,
  toastError,
  toastHideAll,
} from "../../../../components/notificataions/Toast";
import Card from "../../../../components/products/Card";
// Service
import { isFav } from "../../../../services/favouriteService";
import { getUser } from "../../../../services/userServicejs";
import { IoLogoReddit } from "react-icons/io";

export default function Index({ data, userData, isInFav, mainRoute }) {
  const router = useRouter();

  const foundItem = data.foundItem;
  const path = router.asPath.split("/");
  const section = path[2];
  const [subId, articleId, itemId] = path[3].split("#");

  const [currQty, setQty] = useState(1);
  const [isFav, setIsFav] = useState(isInFav);
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  const addProduct = () => {
    const newObj = {
      item: product.item,
      article: product.article,
      section: {
        name: foundItem.sectionName,
        _id: foundItem._id,
        imageUrl: foundItem.imageUrl,
        itemUnit: foundItem.itemUnit,
      },
      mainRoute,
    };

    // console.log(product);
    const formated = productFormater(newObj);
    const text = `${formated.name} Беше успешно добавен в количката`;
    toastProduct(text);

    dispatch(addToCart(formated, currQty));
  };
  const addFavourites = async (product) => {
    toastPromise("Изпраща се...");
    console.log(product);
    const newObj = {
      item: product.item,
      article: product.article,
      section: {
        name: foundItem.sectionName,
        _id: foundItem._id,
        imageUrl: foundItem.imageUrl,
        itemUnit: foundItem.itemUnit,
      },
      mainRoute,
    };
    const formated = productFormater(newObj);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product: formated }),
    };

    const res = await fetch("/api/account/favourites/adding", options);
    const data = await res.json();

    toastHideAll();

    if (data.error) {
      toastError(data.error);
    }
    if (data.message) {
      toastSuccess(data.message);
      setIsFav(true);
    }
  };
  const removeFavourites = async (productId) => {
    toastPromise("Изпраща се...");

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    };

    const res = await fetch("/api/account/favourites/remove", options);
    const data = await res.json();

    toastHideAll();

    if (data.error) {
      toastError(data.error);
    }
    if (data.message) {
      toastSuccess(data.message);
      setIsFav(false);
    }
  };
  useEffect(() => {
    const foundProduct = data.foundItem;

    const article = foundProduct.articles.find(
      (article) => article._id == articleId
    );
    const item = article.items.find((item) => item._id == itemId);
    console.log(item, article);

    setProduct({
      article: {
        name: article.articleName,
        _id: article._id,
      },
      item,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  console.log(data);

  const itemName = `${foundItem.sectionName} ${product?.article.name} ${product?.item.weight} ${foundItem?.itemUnit}`;
  const price = (product?.item?.price * currQty)?.toFixed(2)?.split(".");
  return (
    <main className="mb-auto font-sans">
      <div className="border border-gray">
        <div className="container">
          <div className="flex flex-col justify-between py-5 mt-5 text-gray-500  md:flex-row  ">
            <div className="text-3xl font-semibold text-gray-250 flex items-center ">
              <div className="ml-1 ">{itemName && itemName}</div>{" "}
            </div>
            {/* <div className="mt-5 md:mt-1">
              <ul className="text-sm text-right text-gray-250">
                <li>Код: 23141412</li>
                <li>КатНомер: {product.item.katNomer}</li>
              </ul>
            </div> */}
            <div className="relative h-14 w-40">
              <Image alt="Kraft" src="/icons/kraftLogo.png" layout="fill" />
            </div>
          </div>
          <div className="grid-cols-2 lg:grid xl:grid-cols-[20%25%25%25%] items-center justify-evenly gap-x-4">
            <section className=" ">
              <ThumbsGallery navSize="2xl" image={foundItem.imageUrl} />
            </section>
            <section className="flex  justify-center flex-col">
              <div className="border-y border-gray py-4 px-6 flex items-center justify-center w-full">
                <ul className="list-disc text-sm">
                  {foundItem.description[0]
                    .split("\n")
                    .splice(0, 5)
                    .map((description) => {
                      return <li key={description}>{description}</li>;
                    })}
                </ul>
              </div>
            </section>
            <section className="flex flex-col justify-center h-full p-10">
              <Types data={foundItem.articles} itemUnit={foundItem.itemUnit} />
            </section>
            <section className="flex flex-col p-5 space-y-5">
              <section className="flex items-center justify-between border-b border-gray-bord">
                <div className="text-lg font-bold">Цена:</div>
                <div>
                  {price && (
                    <Pricing price={price[0]} priceDec={price[1]} size="2xl" />
                  )}
                </div>
              </section>
              <section className="flex flex-col justify-center h-full mx-auto sm:w-1/2 md:w-3/4">
                <div className="mb-1">
                  <label htmlFor="qty" className="font-semibold text-gray-200">
                    Количество:
                  </label>
                </div>
                <AddProductInput setQty={setQty} currQty={currQty} />
                <button
                  type="button"
                  className={`w-full px-2 flex py-2  justify-center items-end font-semibold text-white  bg-primary mt-6 text-xl border border-primary hover:bg-transparent hover:text-primary transition-colors `}
                  onClick={() => addProduct()}
                >
                  Купи
                </button>
                {/* Favourites div */}
                {/* {userData && !isFav && (
                  <div
                    className="flex items-center justify-center col-span-2 mt-6 transition-transform cursor-pointer group hover:-translate-y-1"
                    onClick={() => addFavourites()}
                  >
                    <div className="inline-flex p-2 text-xl rounded-full bg-gray group-hover:text-white group-hover:bg-primary md:ml-5 ">
                      <AiOutlineHeart />
                    </div>
                    <span className="ml-1 text-sm select-none group-hover:text-primary">
                      Добави в любими
                    </span>
                  </div>
                )}
                {userData && isFav && (
                  <div
                    className="flex items-center justify-center col-span-2 mt-6 transition-transform cursor-pointer group hover:-translate-y-1"
                    onClick={() => removeFavourites(product.item._id)}
                  >
                    <div className="inline-flex p-2 text-xl rounded-full bg-gray group-hover:text-white group-hover:bg-secondary md:ml-5 ">
                      <AiOutlineHeart />
                    </div>
                    <span className="ml-1 text-sm select-none group-hover:text-secondary">
                      Премахни от любими
                    </span>
                  </div>
                )} */}
              </section>
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="pt-5 pb-10 my-16 border border-gray-150">
          <h3 className="py-5 text-2xl font-semibold text-center text-primary">
            Описание
          </h3>
          <div className="flex px-3 ml-4 sm:ml-10">
            <ul className="list-disc ">
              {foundItem.description[0].split("\n").map((description) => {
                return <li key={description}>{description}</li>;
              })}
            </ul>
          </div>
        </section>
      </div>
      {/* <section className="flex flex-wrap justify-center my-20 gap-x-16 gap-y-10 ">
          {alternatives &&
            alternatives.map((alt) => {
              console.log();
              return (
                <Card
                  data={alt}
                  key={alt.item._id}
                  sectionImage={product?.imageUrl}
                  sectionName={product.sectionName}
                />
              );
            })}
        </section> */}
    </main>
  );
}

// Getting specific item product
export async function getServerSideProps(context) {
  const { section, itemId } = context.params;

  const product = await productByItemId(section, itemId);
  const session = await getSession({ req: context.req });

  let isInFav = false;

  if (session) {
    const user = await getUser(session.user.email);
    isInFav = await isFav(itemId, user._id);
  }
  return {
    props: {
      data: JSON.parse(JSON.stringify(product)),
      userData: JSON.parse(JSON.stringify(session)),
      mainRoute: section,
      // isInFav,
    },
  };
}
