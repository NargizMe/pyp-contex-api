import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const productData = createContext(null);

const ProductDataProvider = ({id = 1, children}) => {

    const [products, setProducts] = useState([]);
    const [productsID, setProductsID] = useState({});

    useEffect(() => {
        axios('https://northwind.vercel.app/api/products').then(result => {
            setProducts(result.data);
        })
        
        axios(`https://northwind.vercel.app/api/products/${id}`).then(result => {
            setProductsID(result.data);
        })

    }, []);
        
    const values = {
        products,
        setProducts,
        productsID,
        setProductsID
    }

    return <productData.Provider value={values}>{children}</productData.Provider>

}

export default ProductDataProvider;