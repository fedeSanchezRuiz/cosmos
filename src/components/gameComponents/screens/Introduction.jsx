import { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ButtonCustom from '../../UI/ButtonCustom';
import useTypewriter from '../../hooks/useTypewriter';
import ScreenCard from '../interfaceElements/ScreenCard';
import NightSkyBackground from '../../images/website-img/Total-Black1.jpg';

const Introduction = ({ onStepChange }) => {
  const [introTextData, setIntroTextData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchIntroTextData = async () => {
      let url = 'http://localhost:3000/chapters';
      const response = await fetch(url);
      const data = await response.json();
      setIntroTextData(data);
    };
    fetchIntroTextData();
  }, []);

  const introText = introTextData[0]?.introText;

  const {
    displayedText,
    setDisplayedText,
    isTypingCompleted,
    setIsTypingCompleted,
  } = useTypewriter({
    text: introText,
    speed: 100,
  });

  useEffect(() => {
    const handleClick = () => {
      setDisplayedText(introText);
      setIsTypingCompleted(true);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [setDisplayedText, setIsTypingCompleted, introText]);

  const goToFightHandler = () => {
    setIsClicked(true);

    setTimeout(() => {
      onStepChange();
    }, 1200);
  };

  return (
    <ScreenCard
      backgroundImage={NightSkyBackground}
      justifyContent='top'
    >
      <motion.div
        animate={{
          opacity: isClicked ? 0 : 1,
          y: isClicked ? -300 : 0,
        }}
        transition={{ duration: 1 }}
      >
        <Flex
          minW={{
            base: '45vh',
            sm: '60vh',
            md: '84vh',
            lg: '90vh',
            xl: '90vh',
          }}
          color='#F1E8D5'
          textAlign='center'
          fontSize={{
            base: '22px',
            sm: '30px',
            md: '32px',
            lg: '33.5px',
            xl: '34px',
          }}
          px={{
            base: '10%',
            sm: '10%',
            md: '10%',
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
          animate={{
            opacity: isTypingCompleted ? 1 : 0,
            scale: [1, 1.02, 1],
          }}
          transition={{
            scale: {
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: 1.5,
            },
            duration: 1.5,
          }}
        >
          {isTypingCompleted ? (
            <ButtonCustom
              onClick={goToFightHandler}
              initial={{ opacity: 1, y: 0 }}
              animate={{
                opacity: isClicked ? 0 : 1,
                y: isClicked ? -300 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                y: { duration: 0.5, delay: 0.1 },
                opacity: { duration: 0.4, delay: 0.1 },
              }}
              text={'Fight!'}
            />
          ) : null}
        </motion.div>
      </Flex>
    </ScreenCard>
  );
};

export default Introduction;
