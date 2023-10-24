import React, { useState, useEffect } from 'react';
import HeartContext from './heartContext';

export const HeartProvider = ({ children }) => {
  const [heartCount, setHeartCount] = useState(3);

  useEffect(() => {
    const savedHeartCount = JSON.parse(localStorage.getItem('heartCount'));
    if (savedHeartCount !== null) {
      setHeartCount(savedHeartCount);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('heartCount', JSON.stringify(heartCount));
  }, [heartCount]);

  const resetHeartCount = () => {
    setHeartCount(3); // Reset to the initial heart count
    localStorage.removeItem('heartCount'); // Remove saved heart count from local storage
  }

  return (
    <HeartContext.Provider value={{ heartCount, setHeartCount, resetHeartCount }}>
      {children}
    </HeartContext.Provider>
  );
};