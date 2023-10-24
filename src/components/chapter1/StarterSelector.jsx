import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ANIMATION_DURATION = 1;

const StarterSelector = ({ charA, charB, oddsA = 0.5, oddsB = 0.5, isVisible, setIsVisible, setStarter }) => {
  const [starter, setStarterInternal] = useState('');

  useEffect(() => {
    // Validate the odds
    if (oddsA + oddsB !== 1) {
      console.error('Error: The sum of the odds must be equal to 1.');
    }
  }, [oddsA, oddsB]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, [isVisible, setIsVisible]);

  useEffect(() => {
    // Randomly select the starter based on the odds
    const selectedStarter = Math.random() < oddsA ? charA : charB;
    setStarterInternal(selectedStarter);
    setStarter(selectedStarter);
  }, [charA, charB, oddsA, oddsB, setStarter]);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1.4, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: -100 }}
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