
export const getProductDetail = async (id, withDescription) => {
    let apiUrl= '';
    if (withDescription) {
        apiUrl = `https://api.mercadolibre.com/items/${id}/description`;
    } else {
        apiUrl = `https://api.mercadolibre.com/items/${id}`;
    }
    const response = await fetch(apiUrl);
    return response.json();
}
