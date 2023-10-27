import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ANIMATION_DURATION = 1;

const StarterSelector = ({ player, enemy, playerOdds = 0.5, enemyOdds = 0.5, isVisible, setIsVisible, setStarter }) => {
  const [starter, setStarterInternal] = useState('');

  useEffect(() => {
    if (playerOdds + enemyOdds !== 1) {
      console.error('Error: The sum of the odds must be equal to 1.');
    }
  }, [playerOdds, enemyOdds]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, [isVisible, setIsVisible]);

  useEffect(() => {
    const selectedStarter = Math.random() < playerOdds ? player : enemy;
    setStarterInternal(selectedStarter);
    setStarter(selectedStarter);
  }, [player, enemy, playerOdds, enemyOdds, setStarter]);

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
          top: '30%',
        }}
      >
        <p>{starter} starts!</p>
      </motion.div>
    )
  );
};

export default StarterSelector;