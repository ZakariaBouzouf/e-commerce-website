export default function SideDrawer({ show, children }) {

  return (
   <div className={`fixed overflow-y-auto w-6/12 h-screen bg-white text-white top-0 right-0 z-50 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col items-center ${show ? "translate-x-0" : "translate-x-full" }`}>
      {children}
    </div>
  )

}
