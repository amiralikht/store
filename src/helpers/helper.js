const shortenText = (text)=>{
    return text.split(" ").slice(0,13).join(" ");
}
const searchProducts = (products,search)=>{
    if (!search) return products;
    const searchedProducts = products.filter(p=> p.title.toLowerCase().includes(search));
    return searchedProducts;
}
const createQueryObject = (currentQuery, newQuery)=>{
    // ! It means that remove search from object and return rest
    // if (newQuery.search === "") {
    //     const{search, ...rest} = currentQuery;
    //     return rest;
    // }
    if (newQuery === '') {
        return {
            ...currentQuery,
            ...newQuery,
        }
    }
}
export {shortenText,searchProducts,createQueryObject};