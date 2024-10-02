import { useEffect, useState } from "react"
import { retrievAllProducts } from "../api/ProductApiService"
import ProductList from "../components/ProductList"

export default function Products() {
  const [products, setProducts] = useState([])

  async function retrieveProducts() {
    try {
      const response = await retrievAllProducts()

      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => retrieveProducts, [])
  return (
      <div className="grid grid-cols-3 gap-5">
        {products.map(product => <ProductList product={product} key={product.id} />)}
      </div>
  )

}
