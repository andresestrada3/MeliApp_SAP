
export const getProducts = async (category) => {
  const apiUrl = `https://api.mercadolibre.com/sites/MCO/search?q=${category}&limit=12`;
  const response = await fetch(apiUrl);
  return response.json();
};
