import { useEffect, useState } from "react"
import API from "../services/config"
import { useParams } from "react-router-dom";
import { colorNameList } from 'color-name-list';


function DetailsPage() {
  const[product,setProduct] = useState({});
  const {category,id} = useParams();
  
  useEffect(()=>{
    const getProduct = async()=>{
      const res = await API.get(`products/${id}`);
      console.log(res.product);
      setProduct(res.product)
    }
    // getColorCode()
    getProduct()
  },[id])
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
        <div className="pt-5">
          <p className="font-semibold text-[25px]">
            {product.price} $
          </p>
        </div>
        <div>
          {/* <div className="rounded-circle w-[2rem] h-[2rem]" style={{backgroundColor: getColorCode(product.color)}}>
          </div> */}
        </div>

        </div>
        <div className="w-1/4 p-5 rounded-md border-[1px]">
          wda
        </div>  
      </div>
      
    </div>
  )
}

export default DetailsPage