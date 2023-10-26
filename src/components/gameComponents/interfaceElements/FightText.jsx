import { useEffect } from 'react';
import { motion } from 'framer-motion';

const FightText = ({ isVisible, setIsVisible }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isVisible, setIsVisible]);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1.4, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 100 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          fontSize: '90px',
          fontWeight: 'bold',
          color: 'red',
          zIndex: 10,
          top: '30%', // Adjust this value as needed
        }}
      >
        Fight!
      </motion.div>
    )
  );
};

export default FightText;