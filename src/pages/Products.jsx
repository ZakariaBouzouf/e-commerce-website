import ProductCard from "../components/ProductCard"
import { useProduct } from "../context/ProductContext"

export default function Products() {
  const {products} = useProduct()

  return (
      <div className="grid grid-cols-3 gap-5">
        {products.map(product => <ProductCard product={product} key={product.id} />)}
      </div>
  )

}
