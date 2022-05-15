// React and nextJs things
import React from "react";

// Styles
// Components
import NavLinkMenu from "./NavLinkMenu";

const dictionary = [
  {
    title: "Интрументи и железария",
    mainRoute: "toolsAndHardware",
    articles: [["Акумулаторни комплекти", "/"]],
    icon: "",
  },
  {
    title: "Градина",
    mainRoute: "garden",
    articles: [["Градински мебели", "/"]],
    icon: "",
  },
  {
    title: "Кухня",
    mainRoute: "kitchen",
    articles: [["Кухненски мебели", "/"]],
    icon: "",
  },
  {
    title: "Баня",
    mainRoute: "bathroom",
    articles: [["Мебели и огледала за баня", "/"]],
    icon: "",
  },
  {
    title: "Отопление, Охлаждане и Вик",
    mainRoute: "heatingCoolingAndVick",
    articles: [["Климатици", "/"]],
    icon: "",
  },
  {
    title: "Подови и стенни покрития",
    mainRoute: "floorAndWallCoverings",
    articles: [["Плочки и лайсни", "/"]],
    icon: "",
  },
  {
    title: "Осветление",
    mainRoute: "lighting",
    articles: [["Вътрешно осветление", "/"]],
    icon: "",
  },

  {
    title: "Електроматериали",
    mainRoute: "electricalMaterials",
    articles: [["Ключове и контакти", "/"]],
    icon: "",
  },
  {
    title: "Строителни материали",
    mainRoute: "buildingMaterials",
    articles: [["Сухи строителни смеси", "/"]],
    icon: "",
  },
  {
    title: "Бои и лакове",
    mainRoute: "paintsAndVarnishes",
    articles: [["Интериорни бои", "/"]],
    icon: "",
  },
];
const NavLinks = ({ isHome, isOpen }) => {
  return (
    <ul
      className={` text-bg-color text-lg flex flex-col w-full ${
        isHome ? "hidden lg:block" : ""
      }`}
    >
      {dictionary.map((article) => {
        return (
          <NavLinkMenu
            isOpen={isOpen}
            title={article.title}
            articles={article.articles}
            key={article.title}
            mainRoute={article.mainRoute}
            isHome={isHome}
          />
        );
      })}
    </ul>
  );
};

export default NavLinks;
