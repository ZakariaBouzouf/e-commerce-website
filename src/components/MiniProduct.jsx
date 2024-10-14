export default function MiniProduct({ product }) {
  return (
    <div className="text-black h-24 items-center flex rounded bg-stone-100 gap-3 mb-3 w-11/12 shadow-md p-2 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150">
      <img src={product.image} className="rounded-full w-[85px] h-[85px]" />
      <p className="text-lg font-bold uppercase">{product.name}</p>
    </div>
  )
}
