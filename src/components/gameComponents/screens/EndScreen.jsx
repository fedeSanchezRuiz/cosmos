import { useContext } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeartContext from '../../../context/heartContext';
import ButtonCustom from '../../UI/ButtonCustom';
import GameNavbar from '../interfaceElements/GameNavbar';
import ScreenCard from '../interfaceElements/ScreenCard';
import useTypewriter from '../../hooks/useTypewriter';

const EndScreen = ({
  text,
  backgroundImage,
  buttonTexts,
  livesLost,
  onButtonClick,
}) => {
  const { heartCount } = useContext(HeartContext);
  const [isClicked, setIsClicked] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const speed = 160;

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowNavbar(true);
    }, 100);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const { displayedText, isTypingCompleted } = useTypewriter({
    text,
    speed,
  });

  return (
    <ScreenCard
      justifyContent='flex-end'
      backgroundImage={backgroundImage}
    >
      <Flex
        h='60%'
        width='100%'
        color='red.600'
        flexDir='column'
        fontSize={{
          base: '22px',
          sm: '31px',
          md: '33px',
          lg: '33.5px',
          xl: '34px',
        }}
        lineHeight={{
          base: '3rem',
          sm: '3.5rem',
          md: '4.2rem',
          lg: '4.5rem',
          xl: '4.5rem',
        }}
      >
        {showNavbar && (
          <GameNavbar
            username='Player1'
            heartCount={heartCount}
            isVisible={true}
            livesLost={livesLost}
          />
        )}
      </Flex>
      <Flex
        width='100%'
        justifyContent='center'
        alignItems='flex-end'
      >
        <motion.div
          animate={{
            opacity: isClicked ? 0 : 1,
            y: isClicked ? -300 : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            fontFamily='ARCADECLASSIC'
            fontSize={{
              base: '100px',
              sm: '130px',
              md: '140px',
              lg: '145px',
              xl: '150px',
            }}
            textAlign='center'
            color='red.600'
          >
            {displayedText}
          </Heading>
        </motion.div>
      </Flex>
      <Flex
        width='100%'
        justifyContent='center'
        mb='25%'
        mt='5%'
      >
        <motion.div
          animate={{ opacity: isTypingCompleted ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {isTypingCompleted && (
            <Flex justifyContent='center'>
              {buttonTexts.map((buttonText, index) => (
                <ButtonCustom
                  key={index}
                  onClick={() => onButtonClick(buttonText)}
                  text={buttonText}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{
                    opacity: isClicked ? 0 : 1,
                    y: isClicked ? -300 : 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    y: { duration: 0.5, delay: 0.1 },
                    opacity: { duration: 0.4, delay: 0.3 },
                  }}
                />
              ))}
            </Flex>
          )}
        </motion.div>
      </Flex>
    </ScreenCard>
  );
};

export default EndScreen;
