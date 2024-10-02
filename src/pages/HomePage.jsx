import Products from "./Products";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-6xl uppercase font-semibold  ">HomePage</h1>
      <Products/>
    </div>
  )
}
