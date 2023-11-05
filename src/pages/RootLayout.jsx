import { Outlet } from 'react-router-dom';
import Navbar from '../components/UI/navbar/Navbar';
import Footer from '../components/UI/Footer';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
