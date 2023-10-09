import { Box, Heading, Text, Button } from '@chakra-ui/react';
import React, { Fragment } from 'react'
import LoginModal from './UI/LoginModal';
import { useState } from 'react';

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
      <Heading fontFamily='ARCADECLASSIC' letterSpacing='0.1rem' wordSpacing='1rem' fontSize={{ base: '25px', sm: '34px', md: '38px', lg: '45px', xl: '45px' }}>Burn your Cosmos!</Heading>
      <Box px={{base: '50px', sm: '80px', md: '150px', lg: '200px' }}>
        <Text letterSpacing='0.05rem' fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px' }}>
          Join Pegasus Seiya and his friends on this adventure against the forces of evil to decide the fate of the Earth!
        </Text>
      </Box>
      <Box my={{ base: '20px', md: '35px', lg: '50px'}}>
        <Button
          onClick={showLoginModalHandler}
          size='lg'
          styles={imageStyles}
          _hover={boxHoverStyles}
          boxShadow='2px 2px 4px rgba(0, 0, 0, 0.5)'
          fontWeight='extrabold'
          fontFamily='ARCADECLASSIC'
          fontSize={{base: '16px', sm: '18px', md: '20px', lg: '22px', xl: '22px'}}
          letterSpacing='0.05rem'
          background='linear-gradient(to bottom, #FFFFCC, #DAA520)'
          color='#704214'
          h={{base: '50px', sm: '56px', md: '65px', lg: '75px', xl: '75px'}}
          w={{base: '120px', sm: '126px', md: '151px', lg: '174px', xl: '174px'}}
        >PLAY NOW
        </Button>
      </Box>
    </Box>
  </Fragment>
  )
};
