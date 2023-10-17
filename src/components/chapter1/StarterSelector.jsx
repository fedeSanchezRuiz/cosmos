import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const ANIMATION_DURATION = 1; // seconds

const StarterSelector = ({ charA, charB, oddsA = 0.5, oddsB = 0.5, isVisible, setIsVisible }) => {
  const [starter, setStarter] = useState('');

  useMemo(() => {
    // Validate the odds
    if (oddsA + oddsB !== 1) {
      console.error('Error: The sum of the odds must be equal to 1.');
    }
  }, [oddsA, oddsB]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isVisible, setIsVisible]);

  useEffect(() => {
    // Randomly select the starter based on the odds
    setStarter(Math.random() < oddsA ? charA : charB);
  }, [charA, charB, oddsA, oddsB]);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1.4, y: 0 }}
        exit={{ opacity: 1, scale: 0.5, y: 100 }}
        transition={{ duration: ANIMATION_DURATION }}
        style={{
          position: 'absolute',
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'red',
          zIndex: 10,
          top: '30%', // Adjust this value as needed
        }}
      >
        <p>{starter} starts!</p>
      </motion.div>
    )
  );
};

export default StarterSelector;