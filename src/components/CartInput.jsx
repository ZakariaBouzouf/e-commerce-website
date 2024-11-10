import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"

export default function CartInput({product}) {
  const { quantity:itemQnt, id:productId }  = product
  console.log("PID",itemQnt)
  const [qnt, setQnt] = useState(itemQnt)
  console.log("QNT",qnt)
  const { updateItemNum } = useCart()
  function handleChange(e) {
    // console.log(e)
    // setQnt(parseInt(e.target.value))
    setQnt(e.target.value)
    // updateItemNum(qnt, productId)
  }
  function decrement() {
    setQnt(qnt => qnt-1)
    updateItemNum(qnt, productId)
  }
  function increment() {
    setQnt(qnt => qnt+1)
    updateItemNum(qnt, productId)
  }
  useEffect(()=>{
    updateItemNum(qnt,productId)
  },[qnt])

  return (
    <div className="flex gap-1">
      <button className="border border-stone-400 p-1 text-2xl font-bold hover:bg-stone-300 rounded" onClick={decrement}>-</button>
      <input value={itemQnt} onChange={handleChange} className="w-16" />
      <button onClick= {increment} className="border border-stone-400 p-1 text-2xl font-bold hover:bg-stone-300 rounded">+</button>
    </div>
  )
}
