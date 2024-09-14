/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {shortenText} from "../helpers/helper"


function Card({data}) {
    const {id,title,image,price,brand} = data;
  return (
    <Link to={`${id}`} >
        <div className="w-[20rem] h-[28rem] p-5 flex flex-col justify-between hover:shadow-lg duration-300 ease-in-out" style={{border: '1px solid #ececec'}}>
            <div className="w-full flex justify-center items-center">
                <img src={image} alt={title} className="w-[15rem]" />    
            </div>
            <div>
                <div className="my-3 gap-y-2">
                    <small className="bg-gray-200 px-5 py-1 rounded-full text-gray-700">{brand}</small>
                    <h5 className="mt-2 text-[15px]">{shortenText(title)}</h5>
                </div>
                
                <p className="text-[18px] font-semibold text-gray-600">{price} $</p>
                
            </div>
            
        </div>
    </Link>
  )
}

export default Card