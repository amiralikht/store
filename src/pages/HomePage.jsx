import { Link } from "react-router-dom";
import { useCategories } from "../context/ProductsContext";

import { IoTvSharp,IoLaptop,IoGameController } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { BiSolidFridge } from "react-icons/bi";

import "../styles/HomePage.css"
function HomePage() {
    const {categories} = useCategories();
    console.log(categories);
    const chooseIcon = (icon)=>{
        switch (icon) {
            case "tv":
                return <IoTvSharp size={"2.5rem"} className="text-[#303030]" />
                case "audio":
                return <FaHeadphones size={"2.5rem"} className="text-[#303030]" />
                case "laptop":
                return <IoLaptop size={"2.5rem"} className="text-[#303030]"/>
                case "mobile":
                return <FaMobile size={"2.5rem"} className="text-[#303030]"/>
                case "gaming":
                return <IoGameController size={"2.5rem"} className="text-[#303030]"/>
                case "appliances":
                return <BiSolidFridge size={"2.5rem"} className="text-[#303030]"/>

            default:
                break;
        }
    }
    return (
        <div>
            <div className="bg-[#FAFAFA] flex justify-center p-5 rounded-lg my-5 gap-24">
                {categories.map((category,index) => (
                    <Link key={index} to={`products/${category}`} className="flex flex-col justify-center items-center top__categories duration-500 ease-in-out">
                        {chooseIcon(category)}
                        <span className="text-[#747474] font-normal mt-6">
                            {category}
                        </span>
                    </Link>
                ))}
            </div>
            
        </div>
    )
}

export default HomePage