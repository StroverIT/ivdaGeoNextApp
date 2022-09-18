export default function getKolichestvo(products) {
  let liters = {};

  products.forEach((section) => {
    section.articles.forEach((article) => {
      article.items.forEach((item) => {
        // liters.add(item.weight);
        if (!liters.hasOwnProperty(item.weight)) {
          liters[item.weight] = { length: 0 };
        }
        liters[item.weight].length += +1;
      });
    });
  });
  const litersToArray = [];
  for (let key in liters) {
    const newObj = {};

    const name = key;
    const length = liters[key].length;

    newObj.name = name;
    newObj.length = length;
    litersToArray.push(newObj);
  }
  liters = litersToArray.sort((a, b) => a.name - b.name);
  return liters;
}
