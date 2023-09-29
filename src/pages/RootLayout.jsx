import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";

const RootLayput = () => {
  return (
      <div>
        <Navbar />
        <Outlet />
      </div>
  )
};

export default RootLayput;