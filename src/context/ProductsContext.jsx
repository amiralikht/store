/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"
import API from "../services/config";
import axios from "axios";

const ProductContext = createContext();

function ProductsProvider({children}) {

    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);
    
    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                axios.all([
                    await API.get("/products/"),
                    await API.get("/products/category")
                ])
                .then(axios.spread((products,categories)=>{
                    setProducts(products.products);
                    setCategories(categories.categories);
                }))
                
            } catch (error) {
                console.log(error.message);
            }
            
        }
        fetchProducts();
    },[])
    return (
        <ProductContext.Provider value={{products,categories}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => {
    const products = useContext(ProductContext);
    return products;
}
const useCategories = () => {
    const categories = useContext(ProductContext);
    return categories;
}
export default ProductsProvider
export {useProducts,useCategories}