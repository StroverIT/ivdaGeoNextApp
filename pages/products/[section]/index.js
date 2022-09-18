import React, { useRef, useState, useEffect } from "react";

// Icons
import { HiX } from "react-icons/hi";
import { IoIosFunnel } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

// Styles
import styles from "../../../styles/products/listProducts.module.css";

// Components
import Product from "./../../../components/products/listProducts/Product";
import Sorting from "./../../../components/products/filters/Sorting";
import AsideHeader from "../../../components/products/aside/AsideHeader";
// Dictionaries
// import sortByDictionary from "./allProductDicFilters.dic";
import sortByDictionary from "../../../dictonaries/allProductDicFilters";
// Services
import { getAllProducts } from "../../../services/productService";
// translation
import Checkbox from "../../../components/base/Checkbox";
// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/productActions";
// Notifications
import { toastProduct } from "../../../components/notificataions/Toast";
//Utils
import getBrands from "../../../utils/getBrands";
import getKolichestvo from "../../../utils/getKolichestvo";

export default function Section({ products, types, sectionRoute }) {
  const dispatch = useDispatch();

  const addProduct = (product, productName) => {
    toastProduct(productName);
    dispatch(addToCart(product));
  };

  const sortingMenu = useRef(null);
  const [isHidden, setHidden] = useState(true);

  const [filterMenu, setFilterMenu] = useState(false);

  //Product state
  const [sections, setSections] = useState(products?.products);
  // total filters
  const [filters, setFilters] = useState({
    series: [],
    price: {},
    liters: [],
    name: [],
  });

  useEffect(() => {
    const newProdArt = products?.products?.slice();

    const filteredArticles = [];

    if (filters.liters.length > 0) {
      newProdArt.forEach((section) => {
        const newObj = Object.assign({}, section);
        newObj.articles = [];
        if (
          filters.series.length > 0 &&
          !filters.series.includes(newObj.sectionName)
        )
          return;
        section.articles.forEach((article) => {
          const newArticle = { ...article };
          newArticle.items = [];

          article.items.forEach((item) => {
            if (filters.liters.some((filter) => filter == item.weight)) {
              newArticle.items.push(item);
            }
          });

          if (newArticle.items.length > 0) {
            newObj.articles.push(newArticle);
          }
        });
        if (newObj.articles.length > 0) {
          filteredArticles.push(newObj);
        }
      });
    }
    if (filters.series.length > 0) {
      filters.series.forEach((filter) => {
        const isFiltered = filteredArticles.some(
          (item) => item.sectionName == filter
        );
        if (isFiltered) return;
        const foundObj = products.products.find(
          (item) => item.sectionName == filter
        );
        filteredArticles.push(foundObj);
      });
    }

    if (filters.name.length > 0) {
      if (filters.name == "desecending") {
        filteredArticles.sort((a, b) =>
          a.sectionName.localeCompare(b.sectionName)
        );
      }
      if (filters.name == "ascending") {
        filteredArticles.sort((a, b) =>
          b.sectionName.localeCompare(a.sectionName)
        );
      }
    }

    if (filteredArticles.length > 0) setSections(filteredArticles);
    else {
      if (filters.name.length > 0) {
        if (filters.name == "desecending") {
          newProdArt.sort((a, b) => a.sectionName.localeCompare(b.sectionName));
        }
        if (filters.name == "ascending") {
          newProdArt.sort((a, b) => b.sectionName.localeCompare(a.sectionName));
        }
        setSections(newProdArt);
      } else {
        setSections(products?.products);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    if (filterMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [filterMenu]);
  const clearAllFiilters = () => {
    setFilters({ series: [], price: {}, liters: [], name: "" });
  };

  useEffect(() => {
    setSections(products?.products);
  }, [products]);
  return (
    <main className="mb-auto">
      {sections && products && (
        <div className="lg:grid grid-cols-[20%80%] lg:space-x-10 container">
          {products && (
            <aside
              className={` w-full h-full lg:block  max-lg:overflow-auto pb-10 ${
                styles.asideContainer
              } lg:relative pt-4 px-5 ${
                filterMenu
                  ? "fixed top-0 z-20 left-0 bg-[#f5f5f5] pt-20"
                  : "hidden"
              }`}
            >
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="mb-3 text-2xl text-bold">Филтри</h3>

                  <div
                    className={`text-lg cursor-pointer text-primary lg:hidden`}
                    onClick={() => setFilterMenu(false)}
                  >
                    <HiX />
                  </div>
                </div>
                {/* Button to clear all the filters */}
                <button
                  className="flex items-center px-6 py-1 mt-2 font-bold border rounded-full cursor-pointer text-primary border-primary"
                  onClick={clearAllFiilters}
                >
                  Изчисти
                </button>
                {/* <AsideHeader text="Цена" /> */}
                <div></div>
              </div>
              <AsideHeader text="Серии" />
              {getBrands(products.products).map((obj, index) => {
                return (
                  <Checkbox
                    key={obj.name}
                    text={`${obj.name} (${obj.length})`}
                    id={`series-${obj.name}`}
                    // quantity={2}
                    filters={filters}
                    setFilters={setFilters}
                  />
                );
              })}
              <AsideHeader text="Количество" />
              {getKolichestvo(products.products).map((obj, index) => {
                return (
                  <Checkbox
                    key={`${obj.name}`}
                    text={`${obj.name} ${products.products[0].itemUnit} (${obj.length})`}
                    id={`liters-${obj.name}`}
                    // quantity={2}
                    filters={filters}
                    setFilters={setFilters}
                  />
                );
              })}
            </aside>
          )}
          <section className="mt-10">
            {/* Filters for mobile */}
            {products && (
              <div className="relative z-10 grid grid-cols-2 gap-2 mb-5 lg:mb-14 lg:grid-cols-1">
                {/* TODO: add icons */}
                <button
                  type="button"
                  className="flex items-center w-full h-full py-2 pl-4 text-left text-white bg-primary lg:hidden "
                  onClick={() => setFilterMenu(!filterMenu)}
                >
                  <span>
                    <IoIosFunnel />
                  </span>
                  <span className="pl-1">Филтри</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-between w-full h-full py-2 pl-4 text-left border border-gray lg:hidden"
                  onClick={() => setHidden(!isHidden)}
                >
                  <div>Сортирай по:</div>
                  <div className="mr-2 text-sm lg:text-3xl">
                    <MdKeyboardArrowDown />
                  </div>
                </button>

                <div
                  className={` w-full absolute lg:flex top-full bg-white z-10 lg:relative h-48 lg:h-auto shadow-2xl lg:shadow-none ${
                    isHidden ? "hidden" : ""
                  } `}
                  ref={sortingMenu}
                >
                  <div>
                    <Sorting
                      title="Сортирай"
                      name="sortBy"
                      setFilters={setFilters}
                      data={sortByDictionary}
                    />
                  </div>
                </div>
              </div>
            )}

            <section className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
              {sections &&
                sections.map((section) => {
                  return section?.articles?.map((article) => {
                    return article.items.map((item, index) => {
                      return (
                        <Product
                          section={section}
                          article={article}
                          item={item}
                          key={article._id + index}
                          imageUrl={section?.imageUrl}
                          sectionName={section?.sectionName}
                          itemUnit={section?.itemUnit}
                          sectionRoute={sectionRoute}
                          description={section?.description}
                          addProduct={addProduct}
                        />
                      );
                    });
                  });
                })}
            </section>
          </section>
        </div>
      )}
      {!sections && (
        <div className="flex justify-center items-center text-xl text-secondary  h-[40vh]">
          Няма намерени резултати
        </div>
      )}
    </main>
  );
}

// Getting all product.. if filtering Must be filtering somehow
export async function getServerSideProps(context) {
  let { section } = context.params;
  const products = await getAllProducts(section);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      sectionRoute: section,
    },
  };
}
