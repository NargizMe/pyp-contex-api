import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const productData = createContext([]);

const ProductDataProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios('https://northwind.vercel.app/api/products').then(result => {
            setProducts(result.data);
        })
    }, []);
        
    const values = {
        products,
        setProducts,
        card,
        setCard,
    }

    return <productData.Provider value={values}>{children}</productData.Provider>

}

export default ProductDataProvider;