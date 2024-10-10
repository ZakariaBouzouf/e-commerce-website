import {  useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"
export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const navigate = useNavigate();

  function addChartHandler() {
    console.log("Z", product.id)
    dispatch({ type: "ADD_TO_CART", payload: product })
  }
  function redirectToProductPage() {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className="flex group bg-stone-300 flex-col rounded-xl  items-center hover:bg-black hover:bg-opacity-70 hover:cursor-pointer" onClick={redirectToProductPage} >
        <img src={`/${product.image}`} className="rounded-t-xl w-full h-32 flex-1 group-hover:brightness-50" />
      <h2 className="group-hover:hidden text-2xl">{product.name}</h2>
      <p class="group-hover:hidden text-lg">{product.description}</p>
      <div className="group-hover:flex justify-center gap-2 hidden duration-300 my-3 ">
        <button onClick={redirectToProductPage} className="rounded border-2 border-stone-400 p-1 text-stone-400 hover:bg-stone-300 hover:border-stone-900 hover:text-stone-900">View</button>
        <button className="rounded border-2 border-stone-400 p-1 text-stone-400 hover:bg-stone-300 hover:border-stone-900 hover:text-stone-900" onClick={e => addChartHandler(e)}>Add to Cart</button>
      </div>
    </div>
  )

}