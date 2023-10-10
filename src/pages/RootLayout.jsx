import { Outlet } from 'react-router-dom';
import Navbar from '../components/UI/navbar/Navbar';
import Footer from '../components/UI/Footer';
import { Fragment } from 'react';

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
