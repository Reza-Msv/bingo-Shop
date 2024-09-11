const shortenTitle = (title) => {
  return title.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filterredProducts = products.filter(
    (products) => products.category === category
  );
  return filterredProducts;
};

const createQueryObject = (currenQuery, newQUery) => {
  if (newQUery.category === "all") {
    const { category, ...rest } = currenQuery;
    return rest;
  }

  if (newQUery.search === "") {
    const { search, ...rest } = currenQuery;
    return rest;
  }
  return {
    ...currenQuery,
    ...newQUery,
  };
};

const getIntialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

const sumQuantity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  shortenTitle,
  searchProducts,
  filterProducts,
  createQueryObject,
  getIntialQuery,
  productQuantity,
  sumPrice,
  sumQuantity,
};
