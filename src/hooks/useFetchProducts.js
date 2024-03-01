import { useEffect, useState } from "react";
import { getProducts } from "../controllers/getProducts";

export  function useFetchProducts( category) {
    const [product, setproduct] = useState([]);
    
    const getNewProduct = async () => {
        const newProduct = await getProducts(category);
        setproduct(newProduct.results);
    }

    useEffect( () => {
        getNewProduct();
    }, [category]);

    return {
        products: product
    }
}
