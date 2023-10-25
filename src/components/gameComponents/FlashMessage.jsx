import { useEffect } from 'react';
import { motion } from 'framer-motion';

const FlashMessage = ({ isVisible, setIsVisible, text, fontSize, style, duration }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, setIsVisible, duration]);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1.4, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 100 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          fontSize: fontSize,
          fontWeight: 'bold',
          color: 'red',
          zIndex: 10,
          top: '30%', // Default value
          ...style, // Apply custom styles
        }}
      >
        {text}
      </motion.div>
    )
  );
};

export default FlashMessage;