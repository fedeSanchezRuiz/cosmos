import { Box, Heading } from '@chakra-ui/react';
import React, { Fragment } from 'react'
import LoginModal from './UI/LoginModal';
import ButtonCustom from './UI/ButtonCustom';
import { useState } from 'react';

export const Header = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const showLoginModalHandler = () => {
    setShowLoginModal(true);
  };

  const closeLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  return (
  <Fragment>
    {showLoginModal && <LoginModal onClosingModal={closeLoginModalHandler} />}
    <Box textAlign='center'>
      <Heading fontFamily='ARCADECLASSIC' letterSpacing='0.1rem' wordSpacing='1rem' fontSize={{ base: '44px', sm: '48px', md: '55px', lg: '60px', xl: '70px' }}>Burn your Cosmos!</Heading>
      <Box my={{ base: '20px', md: '35px', lg: '50px'}}>
        <ButtonCustom 
        text='PLAY NOW'
        onClick={showLoginModalHandler}
        fontSize={{base: '16px', sm: '18px', md: '20px', lg: '22px', xl: '24px'}}
        height={{base: '50px', sm: '56px', md: '65px', lg: '75px', xl: '75px'}}
        width={{base: '120px', sm: '126px', md: '151px', lg: '174px', xl: '174px'}}
        />
      </Box>
    </Box>
  </Fragment>
  )
};