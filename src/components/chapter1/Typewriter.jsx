import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);

  useEffect(() => {
    if (isTypingCompleted) return;

    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + (text[index] || ''));
      index += 1;
      if (index === text.length) {
        clearInterval(intervalId);
        setIsTypingCompleted(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, isTypingCompleted]);

  return { displayedText, setDisplayedText, isTypingCompleted , setIsTypingCompleted };
};

export default Typewriter;