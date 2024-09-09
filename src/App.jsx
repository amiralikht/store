import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import CheckoutPage from "./pages/CheckoutPage"
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/404"
import ProductProvider from "./context/ProductsContext"

function App() {

  return (
    <ProductProvider>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/products" replace/>}/> */}
        <Route path="/" element={<HomePage />}/>
        <Route path="/products/:category" element={<ProductsPage/>}/>
        <Route path="/products/:category/:id" element={<DetailsPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </ProductProvider>
    
  )
}

export default App
