// React and nextJs things
import React from "react";

// Styles
// Components
import NavLinkMenu from "./NavLinkMenu";

const dictionary = [
  {
    title: "Интрументи и железария",
    mainRoute: "toolsAndHardware",
    articles: [
      ["Акумулаторни комплекти", "batteryKits"],
      ["Само тествам", "testing"],
    ],
    icon: "",
  },
  {
    title: "Градина",
    mainRoute: "garden",
    articles: [["Градински мебели", "gardenFurniture"]],
    icon: "",
  },
  {
    title: "Кухня",
    mainRoute: "kitchen",
    articles: [["Кухненски мебели", "kitchenFurniture"]],
    icon: "",
  },
  {
    title: "Баня",
    mainRoute: "bathroom",
    articles: [["Мебели и огледала за баня", "bathroomFurnitureAndMirrors"]],
    icon: "",
  },
  {
    title: "Отопление, Охлаждане и Вик",
    mainRoute: "heatingCoolingAndVick",
    articles: [["Климатици", "airConditioners"]],
    icon: "",
  },
  {
    title: "Подови и стенни покрития",
    mainRoute: "floorAndWallCoverings",
    articles: [["Плочки и лайсни", "tilesAndMOldings"]],
    icon: "",
  },
  {
    title: "Осветление",
    mainRoute: "lighting",
    articles: [["Вътрешно осветление", "interiorLighting"]],
    icon: "",
  },

  {
    title: "Електроматериали",
    mainRoute: "electricalMaterials",
    articles: [["Ключове и контакти", "switchesAndSockets"]],
    icon: "",
  },
  {
    title: "Строителни материали",
    mainRoute: "buildingMaterials",
    articles: [["Сухи строителни смеси", "dryConstructionMixtures"]],
    icon: "",
  },
  {
    title: "Бои и лакове",
    mainRoute: "paintsAndVarnishes",
    articles: [["Интериорни бои", "interiorPaints"]],
    icon: "",
  },
];
const NavLinks = ({ isHome }) => {
  return (
    <ul
      className={` text-bg-color text-lg inline-flex flex-col w-full  ${
        isHome ? "hidden lg:block" : ""
      }`}
    >
      {dictionary.map((article) => {
        return (
          <NavLinkMenu
            title={article.title}
            articles={article.articles}
            key={article.title}
            isHome={isHome}
          />
        );
      })}
    </ul>
  );
};

export default NavLinks;
