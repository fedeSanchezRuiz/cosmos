import { useState, useEffect, useMemo } from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import ButtonCustom from '../UI/ButtonCustom';
import GameCard from './GameCard';
import ModalCard from '../UI/ModalCard';
import { NavbarLogo } from '../UI/navbar/NavbarLogo';
import CardCollection from './CardCollection';
import useTypewriter from '../chapter1/useTypewriter';
import PopeAres from '../../images/PopeAresCut.jpeg';
import PegasusBox from '../../images/PegasusBox2.png';

const finishText = `  -Grand Pope: Athena recognizes Seiya as one of her warriors, and as justice demands, I deliver to you the sacred Cloth of Pegasus!`;

const TEXT_HIDE_DISTANCE = -300;

const Congratulations = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [prizesVisible, setPrizesVisible] = useState(false);
  const [boxVisible, setBoxVisible] = useState(true);
  const [blockText, setBlockText] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [thanksForPlaying, setThanksForPlaying] =
    useState(false);

  const {
    displayedText,
    setDisplayedText,
    isTypingCompleted,
    setIsTypingCompleted,
  } = useTypewriter({
    text: finishText,
    speed: 100,
  });

  const textAnimation = useMemo(
    () => ({
      opacity: isClicked ? 0 : 1,
      y: isClicked ? TEXT_HIDE_DISTANCE : 0,
    }),
    [isClicked]
  );

  const contentAnimation = useMemo(
    () => ({
      opacity: isTypingCompleted ? 1 : 0,
      y: isClicked ? TEXT_HIDE_DISTANCE : 0,
      scale: [1, 1.04, 1],
    }),
    [isTypingCompleted, isClicked]
  );

  useEffect(() => {
    const handleClick = () => {
      setDisplayedText(finishText);
      setIsTypingCompleted(true);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [setDisplayedText, setIsTypingCompleted]);

  const handleImageClick = () => {
    setTimeout(() => {
      setPrizesVisible(true);
    }, 50);
    setIsClicked(true);
    setBoxVisible(false);
    setBlockText(true);
  };

  const handleNextCard = () => {
    if (currentCardIndex < CardCollection.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const currentCard = CardCollection[currentCardIndex];

  const thanksModalHandler = () => {
    setThanksForPlaying(true);
  };

  return (
    <GameCard
      justifyContent='top'
      backgroundImage={PopeAres}
    >
      {thanksForPlaying && (
        <ModalCard
          height={{
            base: '330px',
            sm: '350px',
            md: '330px',
            lg: '340px',
            xl: '350px',
          }}
        >
          <Flex
            flexDir='column'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
          >
            <NavbarLogo
              logoSSHeight={{
                base: '67px',
                sm: '72px',
                md: '74px',
                lg: '76px',
                xl: '80px',
              }}
              logoHeight={{
                base: '30px',
                sm: '32px',
                md: '33px',
                lg: '34px',
                xl: '36px',
              }}
              disableLink={true}
            />
            <Flex
              wrap='wrap'
              justifyContent='center'
              alignItems='center'
              textAlign='center'
              color='rgb(13, 32, 61)'
              fontSize={{
                base: '26px',
                sm: '27px',
                md: '28px',
                lg: '29px',
                xl: '30px',
              }}
              px={{
                base: '5%',
                sm: '9%',
                md: '8%',
                lg: '8%',
                xl: '8%',
              }}
              whiteSpace='pre-line'
              flexDir='column' // Add this line
            >
              Thanks for playing! I hope you have enjoyed this
              demo!
            </Flex>
          </Flex>
        </ModalCard>
      )}
      {prizesVisible && (
        <Flex
          wrap='wrap'
          justifyContent='center'
          alignItems='center'
          maxH='80vh'
        >
          <Flex
            justifyContent='center'
            alignItems='center'
            w='80%'
            mt={{
              base: '14%',
              sm: '8%',
              md: '7%',
              lg: '6%',
              xl: '6%',
            }}
            mb={{
              base: '8%',
              sm: '4%',
              md: '3%',
              lg: '2%',
              xl: '2%',
            }}
            overflow='hidden'
            p='10px'
          >
            <Flex flexDir='column'>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Text
                  fontSize={{
                    base: '32px',
                    sm: '42px',
                    md: '43px',
                    lg: '44px',
                    xl: '45px',
                  }}
                  color='#F1E8D5'
                  textAlign='center'
                >
                  Congratulations!
                </Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Text
                  fontSize={{
                    base: '26px',
                    sm: '36px',
                    md: '38px',
                    lg: '39px',
                    xl: '40px',
                  }}
                  color='#F1E8D5'
                  textAlign='center'
                >
                  You have added 4 new cards to your collection!
                </Text>
              </motion.div>
            </Flex>
          </Flex>
          <Flex
            flexDir='column'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
          >
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Flex
                justifyContent='center'
                mb='5%'
              >
                <motion.div whileTap={{ scale: 0.99 }}>
                  <ArrowLeftIcon
                    opacity='0.6'
                    color='#111111'
                    boxSize={10}
                    onClick={handlePrevCard}
                    cursor='pointer'
                    mr='40px'
                  />
                </motion.div>
                {currentCard}
                <motion.div whileTap={{ scale: 0.99 }}>
                  <ArrowRightIcon
                    opacity='0.6'
                    color='#111111'
                    boxSize={10}
                    onClick={handleNextCard}
                    cursor='pointer'
                    ml='40px'
                  />
                </motion.div>
              </Flex>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
                transition={{ duration: 1, delay: 1.2, scale: { repeat: Infinity, repeatType:'loop', ease:'linear', duration:'1.5' } }}
              >
                <ButtonCustom
                  text='Continue'
                  onClick={thanksModalHandler}
                />
              </motion.div>
            </motion.div>
          </Flex>
        </Flex>
      )}
      <motion.div
        animate={textAnimation}
        transition={{ duration: 2 }}
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
          {!blockText && (
            <Text whiteSpace='pre-line'>{displayedText}</Text>
          )}
        </Flex>
      </motion.div>
      <motion.div
        animate={contentAnimation}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          scale: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          },
        }}
        whileTap={{ scale: 0.7 }}
      >
        {isTypingCompleted && boxVisible && (
          <Flex
            justifyContent='center'
            mt={{
              base: '8%',
              sm: '11%',
              md: '10.5%',
              lg: '8.5%',
              xl: '8%',
            }}
          >
            <motion.div
              onClick={handleImageClick}
              style={{
                cursor: 'pointer',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={PegasusBox}
                alt='Pegasus Box'
                maxH={{
                  base: '300px',
                  sm: '385px',
                  md: '390px',
                  lg: '395px',
                  xl: '400px',
                }}
              />
            </motion.div>
          </Flex>
        )}
      </motion.div>
    </GameCard>
  );
};

export default Congratulations;