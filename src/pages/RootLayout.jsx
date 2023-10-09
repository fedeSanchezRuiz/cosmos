import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/navbar/Navbar";
import Footer from "../components/UI/Footer";
import AuthContext from '../components/context/auth-context';

const RootLayout = () => {
  return (
    <AuthContext.Provider value={{ formIsValid: false, setFormIsValid: () => {} }}>
        <Navbar />
        <Outlet />
        <Footer />
    </AuthContext.Provider>
  )
};

export default RootLayout;