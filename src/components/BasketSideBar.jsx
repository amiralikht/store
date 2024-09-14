/* eslint-disable react/prop-types */
import {TbChecklist} from "react-icons/tb";
import {FaHashtag} from "react-icons/fa6";
import{BsPatchCheck} from "react-icons/bs";

function BasketSideBar({state,clickHandler}) {
  return (
    <div className="w-[300px] ml-[30px] border-[1px] border-gray-300 p-[20px] rounded-md">
        <div className="flex items-center mb-[15px]">
            <TbChecklist className="text-[1.3rem] mr-1"/>
            <p>Total: </p>
            <span className="text-gray-500 ml-4">$ {state.total}</span>
        </div>
        <div className="flex items-center mb-[15px]">
            <FaHashtag className="text-[1.3rem] mr-1"/>
            <p>Quantity: </p>
            <span className="text-gray-500 ml-4">{state.itemsCounter}</span>
        </div>
        <div className="flex items-center mb-[15px]">
            <BsPatchCheck className="text-[1.3rem] mr-1"/>
            <p>Status: </p>
            <span className="text-gray-500 ml-4">{!state.ckeckout && "Pending..."}</span>
        </div>
        <button className="w-full mt-[40px] bg-[--primary_color] text-white p-3 rounded-lg " onClick={()=> clickHandler("CHECKOUT")}>
            Checkout
        </button>
    </div>
  )
}

export default BasketSideBar