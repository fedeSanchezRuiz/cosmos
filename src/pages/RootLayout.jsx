import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar";


const RootLayput = () => {
  return (
      <div>
        <Navbar />
        <Outlet />
      </div>
  )
};

export default RootLayput;