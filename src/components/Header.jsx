import { Box, Heading, Button } from '@chakra-ui/react';
import React, { Fragment } from 'react'
import LoginModal from './UI/LoginModal';
import { useState } from 'react';
import Night from '../images/NightSkyBack.jpeg';
// import Starry from '../images/StarryBack.jpeg';
import classes from './Header.module.css';

export const Header = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const showLoginModalHandler = () => {
    setShowLoginModal(true);
  };

  const closeLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const boxHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed)
  };

  return (
  <Fragment>
    {showLoginModal && <LoginModal onClosingModal={closeLoginModalHandler} />}
    <Box textAlign='center'>
      <Heading fontFamily='ARCADECLASSIC' letterSpacing='0.1rem' wordSpacing='1rem' fontSize={{ base: '44px', sm: '48px', md: '55px', lg: '60px', xl: '70px' }}>Burn your Cosmos!</Heading>
      <Box my={{ base: '20px', md: '35px', lg: '50px'}}>
        <Button
          className={classes.buttonStyle}
          backgroundPosition= 'center'
          backgroundRepeat= 'no-repeat'
          backgroundSize= 'cover'
          color='#704214'
          onClick={showLoginModalHandler}
          styles={imageStyles}
          _hover={boxHoverStyles}
          background={`linear-gradient(to bottom, rgba(255, 255, 204, 1), rgba(218, 165, 32, 0.6)), url(${Night})`}
          fontSize={{base: '16px', sm: '18px', md: '20px', lg: '22px', xl: '24px'}}
          h={{base: '50px', sm: '56px', md: '65px', lg: '75px', xl: '75px'}}
          w={{base: '120px', sm: '126px', md: '151px', lg: '174px', xl: '174px'}}
        >PLAY NOW
        </Button>
      </Box>
    </Box>
  </Fragment>
  )
};