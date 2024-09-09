/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import API from '../services/config';
import { useParams, useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import Loader from '../components/Loader.module';

import { IoSearchOutline } from "react-icons/io5";
import { searchProducts } from '../helpers/helper';


function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  // const [query, setQuery] = useState({});
  // const {products} = useProducts();
  // console.log(products);
  const {category} = useParams();
  useEffect(()=>{
    const getProductsByCategory = async () => {
      try {
        const res = await API.get(`/products/category?type=${category}`);
        setProducts(res.products);
        setDisplay(res.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProductsByCategory()
  },[category]);

  useEffect(()=>{
    let finalProducts = searchProducts(products, search);
    setDisplay(finalProducts);
    
    if (search!== "") {
      
      setSearchParams({search})  
    }else{
      setSearchParams({})
    }
  },[search])

  // * keep search query, when you refresh the page
  // useEffect(()=>{
  //   let finalProducts = searchProducts(products, search);
  //   const searchURL = searchParams.get("search");
  //   if (searchURL) setSearch(searchURL);
  //   setDisplay(finalProducts);
  // },[products])
  return (
    <>
      <div className='w-full'>
        <div className="flex px-5 w-[96%] mx-auto">
          <div className="flex items-center rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset outline-none focus:shadow-lg sm:text-sm sm:leading-6">
            <IoSearchOutline size={'1.5rem'} className="text-gray-400 mr-2"/>
            <input id="search" name="search" value={search} type="text" placeholder="Search..." className="placeholder:text-gray-400 outline-none w-full" onChange = {e => setSearch(e.target.value.toLowerCase().trim())}/>
          </div>
        </div>
          <div className='flex flex-wrap justify-start p-5 mb-10 mx-auto lg:ml-7'>
            {!display.length && <p><Loader/></p>}
            {display.map(product => (
              <Card key={product.id} data={product}/>
              // <p key={product.id}>{product.title}</p>
            ))}
          </div>
      </div>
      
    </>
    
  )
}

export default ProductsPage