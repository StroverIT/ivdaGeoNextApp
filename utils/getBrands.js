export default function getBrands(products) {
  return products.map((section) => {
    console.log(section);
    const length = section.articles.reduce((old, newObj) => {
      return old + newObj.items.length;
    }, 0);
    return { name: section.sectionName, length };
  });
}
