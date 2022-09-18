import boiLateksi from "./boiLateksi/index";
import pqni from "./pqni";
import grundove from "./grundove";
import grundoveZaPetna from "./grundoveZaPetna";
import alkidnaBoqZaMetal from "./alkidnaBoqZaMetal";
import dvykomponentniHidroizolacii from "./dvykomponentniHidroizolacii";
import silikoni from "./silikoni";
/*
mainRoute: "Main route"
articles: {
  menu: "Menu",
  subMenu: [
    "subMenu name",
    "subMenu name"...
  ]
}
]
*/
const dictionary = [
  {
    title: "Бои/Латекси",
    // Menu
    articles: boiLateksi,
    icon: "",
  },

  { title: "Пяни" },

  { title: "Грундове" },
  { title: "Грундове за петна" },

  { title: "Алкидна Боя За Метал" },

  {
    title: "Двукомпонентни Хидроизолации",
  },

  { title: "Силикони" },
];

export default dictionary;
