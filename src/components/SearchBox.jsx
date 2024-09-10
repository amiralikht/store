/* eslint-disable react/prop-types */
import { IoSearchOutline } from "react-icons/io5";

function SearchBox({search,setSearch}) {
    return (
        <div className="flex px-5 w-[96%] mx-auto">
            <div className="flex items-center rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset outline-none focus:shadow-lg sm:text-sm sm:leading-6">
            <IoSearchOutline size={'1.5rem'} className="text-gray-400 mr-2"/>
            <input id="search" name="search" value={search} type="text" placeholder="Search..." className="placeholder:text-gray-400 outline-none w-full" onChange = {e => setSearch(e.target.value.toLowerCase().trim())}/>
            </div>
        </div>
    )
}

export default SearchBox