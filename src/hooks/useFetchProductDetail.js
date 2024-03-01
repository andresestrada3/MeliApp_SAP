import { useEffect, useState } from "react";
import { getProductDetail } from "../controllers/getProductDetail";

export  function useFetchProductDetail(id) {
    const [productDetail, setproductDetail] = useState([]);
    const [description, setdescription] = useState([]);

    const getNewProductDetail = async () => {
        const newProductDetail = await getProductDetail(id, false);
        setproductDetail(newProductDetail);
    }

    const getNewProductDescription = async () => {
        const newProductDescription = await getProductDetail(id, true);
        setdescription(newProductDescription);
    }


    useEffect( () => {
        getNewProductDetail();
        getNewProductDescription();
    }, [ ]);

    return {
        productDetail: productDetail,
        description: description.plain_text
    }
}
