/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import API from '../services/config';
import { useParams, useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import Loader from '../components/Loader.module';

// import { IoSearchOutline } from "react-icons/io5";
import { searchProducts } from '../helpers/helper';
import SearchBox from '../components/SearchBox';


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
          <SearchBox search={search} setSearch={setSearch}/>
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