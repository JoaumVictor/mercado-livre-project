export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const result = await fetch(url).then((response) => response.json());
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const urlCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const urlQueryCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  let url = '';

  if (categoryId && query) {
    url = urlQueryCategory;
  } else if (categoryId && !query) {
    url = urlCategory;
  } else {
    url = urlQuery;
  }
  return fetch(url).then((response) => response.json());
}

export async function getProductForId(id) {
  const url = `https://api.mercadolibre.com/items/${id}`;
  return fetch(url).then((response) => response.json());
}
