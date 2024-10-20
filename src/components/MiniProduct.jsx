import { useCart } from "../context/CartContext"

export default function MiniProduct({ product }) {
  const {removeFromCart} = useCart()

  return (
    <div className="text-black h-auto items-center flex justify-between rounded bg-stone-100 mb-3 shadow-md p-2 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 w-full">
      <div className="flex items-center gap-3">
        <img src={`../${product.image}`} className="rounded-full w-[100px] h-[100px]" />
        <p className="text-lg font-bold uppercase ">{product.name}</p>
      </div>
      <div className="flex flex-col gap-5 justify-between items-end">
        <button onClick={()=>removeFromCart(product)} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </button>
        <input value={product.quantity}  className="w-16"/>
      </div>
    </div>
  )
}
