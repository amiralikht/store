/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import API from "../services/config"
import { useParams } from "react-router-dom";
import { colorNameList } from 'color-name-list';

import { FaPlus, FaMinus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { productQuantity } from "../helpers/helper";


function DetailsPage() {
  const[product,setProduct] = useState({});
  const {category,id} = useParams();
  const [state,dispatch] = useCart();

  const quantity = productQuantity(state, id);
  // console.log(quantity);
  
  useEffect(()=>{
    const getProduct = async()=>{
      const res = await API.get(`products/${id}`);
      setProduct(res.product)
    }
    // getColorCode()
    getProduct()
  },[id])
  // console.log(state);
  const clickHandler = (type)=>{
    dispatch({type, payload: product});
  }
  
  // const getColorCode = (colorName)=>{
  //   const namedColor = colorNameList.find(color => color.name.toLowerCase() === colorName);
  //   const {hex} = namedColor;
  //   console.log(hex);
    
  // }
  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <img src={product.image} alt={product.title} className="w-[30rem]" />
      </div>
      <div className="flex w-full p-2 mx-10">
        <div className="w-3/4 p-5">
        <div className="w-full border-b-2 pb-5">
          <h3 className="font-bold text-[20px]">
            {product.title}
          </h3>
        </div>
        <div className="pt-5 flex items-center">
          <p className="font-semibold text-[25px]">
            {product.price} $
          </p>
          {product.popular && (<small className="bg-green-200 px-3 py-1 rounded-full text-green-700 mx-3">Popular</small>)}
        </div>
        <div className="mt-5 gap-2 flex items-center">
          <small className="bg-gray-200 px-3 py-1 rounded-full text-gray-500">{product.brand}</small>
          <small className="bg-gray-200 px-3 py-1 rounded-full text-gray-500">{product.model}</small>
        </div>
        <div className="mt-5 text-gray-600 text-justify">
          {product.description}
        </div>

        </div>
        <div className="w-1/4 p-5 rounded-md border-[1px] h-[90vh] sticky right-0 bg-gray-100 top-0">
          <span>Buy new:</span>
          <h3 className="font-bold text-[20px]">{product.price} $</h3>
          <div className="mt-5 flex justify-center items-center">

            {quantity ===1 && (<button className="text-white p-2 rounded-lg" style={{backgroundColor: 'var(--primary_color)'}} onClick={()=>clickHandler("REMOVE_ITEM")}><FaRegTrashCan/></button>)}

            {quantity > 1 && (<button className="text-white p-2 rounded-lg" style={{backgroundColor: 'var(--primary_color)'}} onClick={()=>clickHandler("DECREASE")}><FaMinus/></button>)}

            {quantity>0 && (<span className="mx-5">{quantity}</span>)}
            
            {quantity === 0 ? (<button className="text-white w-full p-2 rounded-lg" style={{backgroundColor: 'var(--primary_color)'}} onClick={()=>clickHandler("ADD_ITEM")}>Add to Cart</button>):(<button className="text-white p-2 rounded-lg" style={{backgroundColor: 'var(--primary_color)'}} onClick={()=>clickHandler("INCREASE")}><FaPlus /></button>)}

            
            
          </div>
          
        </div>  
      </div>
      
    </div>
  )
}

export default DetailsPage