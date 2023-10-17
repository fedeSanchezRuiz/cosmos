import { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ButtonCustom from '../UI/ButtonCustom';
import TotalBlack from '../../images/Total-Black1.jpg';
import Typewriter from '../chapter1/Typewriter';

const Introduction = () => {

  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  const introText = `  Coliseum, Athena's Sanctuary, Greece
  -Grand Pope: Among 1024 warriors, you two are the only ones who have survived till the end. The moment has come to fight against each other. The winner will obtain the sacred armor of Pegasus. Time to fight!`;

  const { displayedText, setDisplayedText, isTypingCompleted, setIsTypingCompleted } = Typewriter({
    text: introText,
    speed: 100,
  });

  const goToFightHandler = () => {
    setIsClicked(true);

    setTimeout(() => {
      navigate('fightCassios');
    }, 1200);
  };

  useEffect(() => {
    const handleClick = () => {
      setDisplayedText(introText);
      setIsTypingCompleted(true);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [introText, setDisplayedText, setIsTypingCompleted]);

  return (
    <Flex
      height='100vh'
      maxWidth='768px'
      margin='0 auto'
      backgroundImage={`linear-gradient(to bottom, rgba(96, 128, 159, 0.1), rgba(136, 178, 209, 0.3)), url(${TotalBlack})`}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      flexDir='column'
      justifyContent='top'
      alignItems='center'
    >
      <motion.div
        animate={{ opacity: isClicked ? 0 : 1, y: isClicked ? -300 : 0 }}
        transition={{ duration: 1 }}
      >
      <Flex
        color='#F1E8D5'
        textAlign='left'
        fontSize={{
          base: '22px',
          sm: '31px',
          md: '33px',
          lg: '33.5px',
          xl: '34px',
        }}
        px={{
          base: '10%',
          sm: '10%',
          md: '12%',
          lg: '11%',
          xl: '10%',
        }}
        pt={{
          base: '10%',
          sm: '12%',
          md: '8%',
          lg: '7%',
          xl: '6%',
        }}
        lineHeight={{
          base: '3rem',
          sm: '3.5rem',
          md: '4.2rem',
          lg: '4.5rem',
          xl: '4.5rem',
        }}
      >
        <Text whiteSpace='pre-line'>{displayedText}</Text>
      </Flex>
      </motion.div>
      <Flex
        pt={{
          base: '5%',
          sm: '6%',
          md: '6%',
          lg: '6%',
          xl: '7%',
        }}
      >
        <motion.div
          animate={{ opacity: isTypingCompleted ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {isTypingCompleted ? 
          <ButtonCustom
          whileHover={{ scale: 1.05, opacity: 0.6 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToFightHandler}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isClicked ? 0 : 1, y: isClicked ? -300 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          text={'Fight!'} /> : null}
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Introduction;