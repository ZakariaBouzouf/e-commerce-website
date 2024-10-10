import { useEffect } from "react";
import ProductImage from "../components/ProductImage";
import { useProduct } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import Icons from "../components/Icons";

export default function ProductPage() {
  const { currentProduct, getProduct } = useProduct()
  const { productId } = useParams()

  useEffect(() => {
    getProduct(productId)
    console.log(currentProduct)
  }, [productId])
  return (
    <div className="flex flex-col px-10 gap-4 mt-3 ">
      <Link className="text-lg font-satoshi hover:bg-stone-300 hover:rounded-md flex-grow-0 p-2 max-w-24 font-semibold" to="/">Go back</Link>
      <div className="flex gap-10 w-full">
        {/* <ProductImage /> */}
        <img className="w-7/12 rounded-md" src={`/${currentProduct.image}`}/>
        <div className="flex flex-col gap-10 justify-between w-5/12">
          <h1 className="text-5xl font-bold">{currentProduct.name}</h1>
          <p className="text-xl">{currentProduct.description}</p>
          <p className="text-2xl font-bold">{currentProduct.price} $</p>
          <div className="flex w-full gap-4">
            <button className="bg-black text-xl text-white p-2 rounded-md flex-grow-[4] hover:bg-stone-400 hover:text-black">Add to cart</button>
            {/* <button className="rounded-md bg-red-600 p-2 flex-grow">no</button> */}
            <button className="rounded-md bg-stone-300 p-2 flex-grow hover:bg-stone-400"><Icons type="heart" form="size-8 "/></button>

          </div>
        </div>
      </div>
    </div>
  )

}