/* eslint-disable react/prop-types */
import React from 'react'
import { shortenText } from '../helpers/helper'

import { FaPlus, FaMinus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

function BasketCard({data,clickHandler}) {
  return (
    <div className="flex justify-between items-center border-[1px] border-gray-300 rounded-md p-[20px] mb-[20px]">
        <div className='flex items-center gap-4'>
            <img className='w-[50px] h-[50px]' src={data.image} alt={data.title} />
            <p>{shortenText(data.title)}</p>
        </div>
        
        <div className='gap-5 flex items-center'>
            {data.quantity === 1 && (<button className="text-white p-2 rounded-lg bg-[--primary_color]" onClick={()=> clickHandler("REMOVE_ITEM", data)}><FaRegTrashCan/></button>)}
            {data.quantity > 1 && (<button className="text-white p-2 rounded-lg bg-[--primary_color]" onClick={()=> clickHandler("DECREASE", data)}><FaMinus/></button>)}
            <span className=" text-center]">{data.quantity}</span>
            <button className="text-white p-2 rounded-lg bg-[--primary_color]" onClick={()=> clickHandler("INCREASE", data)}><FaPlus/></button>
        </div>
    </div>
  )
}

export default BasketCard