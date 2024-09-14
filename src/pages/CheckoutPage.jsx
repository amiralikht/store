import { useCart } from "../context/CartContext"
import BasketCard from "../components/BasketCard"
import BasketSideBar from "../components/BasketSideBar"
function CheckoutPage() {
  const [state,dispatch] = useCart();

  const clickHandler = (type, payload)=>{
    dispatch({type, payload});
  }
  
  if(!state.itemsCounter){
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Empty</p>
      </div>
    ) 
  }

  return (
    <div className="flex items-start justify-between">
      <div className="min-h-screen w-full">
        {state.selectedItems.map((product)=>(
          <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>
        ))}
      </div>
      <BasketSideBar state={state} clickHandler={clickHandler}/>
    </div>
  )
}

export default CheckoutPage