import { Outlet } from 'react-router-dom';
import Navbar from '../components/UI/navbar/Navbar';
import Footer from '../components/UI/Footer';
import AuthContext from '../context/authContext';
import { useState, useEffect } from 'react';

const RootLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );
  const [username, setUsername] = useState(
    localStorage.getItem('username') || null
  );

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime');

    if (expirationTime && new Date().getTime() > expirationTime) {
      // Clear the authentication state from localStorage
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('expirationTime');

      // Clear the authentication state in the component
      setIsLoggedIn(false);
      setUsername(null);
    }
  }, []);

    const login = (enteredUsername) => {
        setIsLoggedIn(true);
        setUsername(enteredUsername);
        const expirationTime = new Date().getTime() + 6 * 60 * 60 * 1000;
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', enteredUsername);
        localStorage.setItem('expirationTime', expirationTime);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername(null);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('expirationTime');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
            <Navbar />
            <Outlet />
            <Footer />
        </AuthContext.Provider>
    );
};

export default RootLayout;