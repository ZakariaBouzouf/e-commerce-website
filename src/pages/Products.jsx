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
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {products.map(product => <ProductList product={product} key={product.id} />)}
      </div>
      </div>
    </div>
  )

}
