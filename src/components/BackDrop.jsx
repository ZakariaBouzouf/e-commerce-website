import { useContext } from "react"
import { SideDrawerShow } from "../pages/Root"

export default function BackDrop( ) {
  const {show,setShow} = useContext(SideDrawerShow)

  function dropdownToggle(){
    setShow(!show)
  }
  return (
    <>
      {show && <div onClick={dropdownToggle} className="fixed w-full h-full bg-black/50 z-40 top-0 right-0" />}
    </>
  )

}
