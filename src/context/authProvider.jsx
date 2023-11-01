import { useState, useEffect } from 'react';
import AuthContext from './authContext';

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );
  const [username, setUsername] = useState(
    localStorage.getItem('username') || 'Player1'
  );

  useEffect(() => {
    const expirationTime =
      localStorage.getItem('expirationTime');

    if (
      expirationTime &&
      new Date().getTime() > expirationTime
    ) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('expirationTime');

      setIsLoggedIn(false);
      setUsername(null);
    }
  }, []);

  const login = (enteredUsername) => {
    setIsLoggedIn(true);
    setUsername(enteredUsername);
    const expirationTime =
      new Date().getTime() + 6 * 60 * 60 * 1000;
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('username', enteredUsername);
    localStorage.setItem('expirationTime', expirationTime);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('Player1');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('expirationTime');
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
