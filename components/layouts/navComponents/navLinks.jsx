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
      ["Акумулаторн124и комплекти", "batteryKits"],
      ["Само тествам1", "testing"],
      ["Акумулато124рни комплекти1", "batteryKits"],
      ["Само тествам22", "testing"],
      ["Акумулато142рни комплекти3", "batteryKits"],
      ["Само тест421в31ам4", "testing"],
      ["Акумулато2142рни комплекти5", "batteryKits"],
      ["Само тес421тв3ам6", "testing"],
      ["Акумул411244аторни комплекти", "batteryKits"],
      ["Само те12с421твам213", "testing"],
      ["Акумулат122414орни комплекти1", "batteryKits"],
      ["Само теств124м21231", "testing"],
      ["Акумулаторн214и комплекти3", "batteryKits"],
      ["Само тества12421312м4", "testing"],
      ["Акумулатор12431ни комплекти5", "batteryKits"],
      ["Само тес1421231твам6", "testing"],
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
    <>
      <ul
        className={` text-bg-color text-lg inline-flex flex-col w-full h-full ${
          isHome ? "hidden lg:inline pt-2" : ""
        }`}
        data-columns="2"
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
    </>
  );
};

export default NavLinks;
