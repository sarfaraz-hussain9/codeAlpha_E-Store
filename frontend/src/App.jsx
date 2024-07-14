import { Outlet } from "react-router-dom"
import Navigation from "./pages/Auth/Navigation"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
   <>
    <ToastContainer/>
    <Navigation/>
    <div className="py-3">
      <Outlet/>
    </div>
   </>
  )
}

export default App