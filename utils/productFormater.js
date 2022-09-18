const productFormater = (product) => {
  let formated = {};
  formated.route = `/products/${product.mainRoute}/${product.section._id}#${product.article._id}#${product.item._id}`;
  formated.name = `${product.section.name} ${product.article.name} ${product.item.weight} ${product.section.itemUnit}`;
  formated.imageUrl = product.section.imageUrl;
  formated.price = product.item.price;
  formated._id = product.item._id;

  return formated;
};

export default productFormater;
