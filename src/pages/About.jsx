import { Flex, Heading, Image, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import classes from './About.module.css';
import ariesMu from '../../src/components/images/website-img/AriesMu.png';
import MessageBackground from '../../src/components/images/website-img/AiorosMessage.webp';
import starryNight from '../../src/components/images/website-img/StarryBack.jpeg';

const stoneStyle = {
  background: `linear-gradient(to top, rgba(150, 150, 150, 0.4), rgba(100, 100, 100, 0.8)), url(${MessageBackground})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const About = () => {
  const [selectSaintSeiya, setSelectSaintSeiya] = useState(true);
  const [selectCosmos, setSelectCosmos] = useState(false);

  const MotionButton = motion(Button);

  const selectSaintSeiyaHandler = () => {
    setSelectSaintSeiya(true);
    setSelectCosmos(false);
  };

  const selectCosmosHandler = () => {
    setSelectCosmos(true);
    setSelectSaintSeiya(false);
  };

  const firstStone = (
    <Flex
      className={`${classes.stoneBox} ${classes.outerFlex}`}
      style={stoneStyle}
    >
      <Heading
        className={classes.heading}
        fontFamily='papyrus'
      >
        Saint Seiya
      </Heading>
      <Flex className={classes.innerFlex}>
        Saint Seiya is a manga and anime originally created by
        sensei Masami Kurumada in 1985. The plot of the story
        centers around a group of young warriors known as Saints
        that fight alongside the Greek Goddess Athena to protect
        humanity against the forces of evil.
      </Flex>
    </Flex>
  );

  const secondStone = (
    <Flex
      className={`${classes.stoneBox} ${classes.outerFlex}`}
      style={stoneStyle}
    >
      <Heading
        className={classes.heading}
        fontFamily='papyrus'
      >
        Cosmos Warriors
      </Heading>
      <Flex className={classes.innerFlex}>
        Cosmos Warriors is a Saint Seiya website that leads you
        to a beta version of an online game created by me,
        Federico Sánchez. My main purpose is putting into
        practice what I've learnt so far about React JS and the
        vast world of web development.
      </Flex>
    </Flex>
  );

  const MuExplain = (
    <Image
      maxH='550px'
      display={{
        base: 'none',
        sm: 'none',
        md: 'block',
        lg: 'block',
        xl: 'block',
      }}
      src={ariesMu}
    />
  );

  const buttonStyles = {
    display: 'flex',
    color: 'rgb(13, 32, 61)',
    background: `linear-gradient(to top, rgba(179, 224, 242, 0.9), rgba(0, 40, 85, 0.8)), url(${starryNight})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily: 'ARCADECLASSIC',
    letterSpacing: '0.04rem',
    boxShadow:
      '0px 10px 15px -3px rgba(0, 0, 0, 0.2), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    fontSize: {
      base: 'small',
      sm: 'small',
      md: 'medium',
      lg: 'medium',
      xl: 'medium',
    },
    width: {
      base: '140px',
      sm: '150px',
      md: '160px',
      lg: '160px',
      xl: '160px',
    },
    height: {
      base: '45px',
      sm: '46px',
      md: '50px',
      lg: '50px',
      xl: '50px',
    },
    borderRadius: '15px',
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.95 },
    _hover: { bg: 'blue.400' },
  };

  const muExplanation = (
    <Flex
      width={{ base: '0%', sm: '0%', md: '50%' }}
      justifyContent='center'
    >
      {MuExplain}
    </Flex>
  );

  const stoneBoxes = (
    <Flex
      width={{ base: '100%', sm: '100%', md: '50%' }}
      flexDir='column'
      justifyContent='flex-start'
      alignItems={{ base: 'center', md: 'flex-start' }}
    >
      <Flex
        h='15%'
        w={{
          base: '100%',
          sm: '80%',
          md: '96%',
          lg: '95%',
          xl: '90%',
        }}
        justifyContent='center'
        alignItems={{ base: 'flex-end', md: 'center' }}
      >
        <MotionButton
          {...buttonStyles}
          borderRightRadius='0'
          borderRight='1px solid rgb(13, 32, 61)'
          onClick={selectSaintSeiyaHandler}
        >
          Saint Seiya
        </MotionButton>
        <MotionButton
          {...buttonStyles}
          borderLeftRadius='0'
          borderLeft='1px solid rgb(13, 32, 61)'
          onClick={selectCosmosHandler}
        >
          Cosmos Warriors
        </MotionButton>
      </Flex>
      {selectSaintSeiya && (
        <Flex
          h={{ base: '100%', sm: '100%', md: '85%' }}
          w={{
            base: '100%',
            sm: '80%',
            md: '96%',
            lg: '95%',
            xl: '90%',
          }}
          justifyContent='center'
          alignItems={{
            base: 'center',
            sm: 'center',
            md: 'flex-start',
            lg: 'flex-start',
            xl: 'flex-start',
          }}
          fontSize={{
            base: '18px',
            sm: '22px',
            md: '18px',
            lg: '19px',
            xl: '22px',
          }}
        >
          {firstStone}
        </Flex>
      )}
      {selectCosmos && (
        <Flex
          h={{ base: '100%', sm: '100%', md: '85%' }}
          w={{
            base: '100%',
            sm: '80%',
            md: '96%',
            lg: '95%',
            xl: '90%',
          }}
          justifyContent='center'
          alignItems={{
            base: 'center',
            sm: 'center',
            md: 'flex-start',
            lg: 'flex-start',
            xl: 'flex-start',
          }}
          fontSize={{
            base: '18px',
            sm: '22px',
            md: '18px',
            lg: '19px',
            xl: '22px',
          }}
        >
          {secondStone}
        </Flex>
      )}
    </Flex>
  );

  return (
    <Flex
      minH='72vh'
      flexDir='row'
      mx={{
        base: '2%',
        sm: '2%',
        md: '4%',
        lg: '10%',
        xl: '15%',
      }}
      mt={{
        base: '26%',
        sm: '19%',
        md: '14%',
        lg: '11%',
        xl: '8%',
      }}
      mb={{ base: '0%', sm: '3%', md: '3%', lg: '2%', xl: '2%' }}
      wrap='wrap'
    >
      {muExplanation}
      {stoneBoxes}
    </Flex>
  );
};

export default About;
