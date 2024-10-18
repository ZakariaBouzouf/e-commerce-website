import { useContext } from "react"
import { SideDrawerShow } from "../pages/Root"

export default function SideDrawer({ show, children }) {
  const { setShow } = useContext(SideDrawerShow)

  return (
    <div className={`fixed overflow-y-auto w-6/12 h-screen bg-white text-white top-0 right-0 z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${show ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex flex-col gap-2">
        <button className="p-1 self-end bg-stone-300 font-bold text-xl rounded-md  m-1 mr-3  w-10 hover:bg-stone-400 transition-all duration-300" onClick={() => setShow(!show)}>X</button>
        <div className="m-auto w-10/12 ">
          {children}
        </div>
      </div>
    </div>
  )

}
