import { Outlet } from 'react-router-dom';
import Navbar from '../components/UI/navbar/Navbar';
import Footer from '../components/UI/Footer';
import { AuthProvider } from '../context/authProvider';

const RootLayout = () => {

    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </AuthProvider>
    );
};

export default RootLayout;