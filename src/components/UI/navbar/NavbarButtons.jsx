import { useState, useEffect, useContext } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, HStack, IconButton, VStack } from '@chakra-ui/react';
import LoginModal from '../LoginModal';
import AuthContext from '../../context/auth-context';

const buttons = [
  { name: 'About', path: 'about' },
  { name: 'Rules', path: 'rules' },
  { name: 'Characters', path: 'characters' },
  { name: 'Cloths', path: 'cloths' },
];

export const NavbarButtons = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { formIsValid } = useContext(AuthContext);

  useEffect(() => {
    const handleResize = () => {
      // Close the menu if the window width is greater than the breakpoint
      if (window.innerWidth > 480) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowMenu]);

  const showLoginModalHandler = () => {
    setShowLoginModal(true);
  };

  const closeLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  }

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const buttonStyles = {
    minW: '105px',
    h: '45px',
    bg: 'transparent',
    color: 'rgb(13, 32, 61)',
    variant: 'solid',
    colorScheme: 'blackAlpha',
  };

  const buttonHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
  };

  return (
    <HStack>
      {showLoginModal && <LoginModal onClosingModal={closeLoginModalHandler} />}
      <IconButton
        onClick={showMenuHandler}
        aria-label='Open Menu'
        size='lg'
        background='transparent'
        color='rgb(13, 32, 61)'
        mr={2}
        icon={<HamburgerIcon />}
        display={{
          base: 'flex',
          sm: 'flex',
          md: 'none',
          lg: 'none',
        }}
      />
      <Flex display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}>
        {buttons.map((button) => (
          <Link
            to={button.path}
            key={button.name}
          >
            <Button
              fontFamily='ARCADECLASSIC'
              letterSpacing='0.03rem'
              fontSize={{base: 'x-small', sm: 'small', md: 'medium', lg: 'medium', xl: 'medium'}}
              sx={buttonStyles}
              style={imageStyles}
              _hover={buttonHoverStyles}
              onClick={closeMenuHandler}
            >
              {button.name}
            </Button>
          </Link>
        ))}
        <Button
          mx='8px'
          background='linear-gradient(to bottom, #FFFFCC, #DAA520)'
          color='#704214'
          variant='solid'
          w='140px'
          h='45px'
          fontWeight='extrabold'
          fontFamily='ARCADECLASSIC'
          fontSize={{ md: '18px', lg: '20px', xl: '20px'}}
          letterSpacing='0.04rem'
          style={imageStyles}
          _hover={buttonHoverStyles}
          borderRadius='25px'
          onClick={showLoginModalHandler}
        >
          {!formIsValid ? <Box>Login</Box> : <Box>Logout</Box>}
        </Button>
      </Flex>
      {showMenu && (
        <VStack
        position='absolute'
    top='68px'
    left='0'
    width='100%'
    h='56vh'
    display={{ base:'flex', sm:'flex', md: 'none', lg: 'none' }}
    bg='linear-gradient(to bottom, #88B2D1, #B3E0F2)'
    spacing={4}
    zIndex={1}
    boxShadow='lg'
    borderBottomRadius='15px'
    justifyContent='space-evenly'
    alignItems='center'
    >
        <Flex
        w='100%'
        h='100%'
        flexDir='column'
        justifyContent='space-evenly'
        alignItems='center'
        overFlowY='auto'
        >
          <Flex w='95%' justifyContent='flex-end'>
            <IconButton
            onClick={closeMenuHandler}
            aria-label='Close-menu'
            size='lg'
            icon={<CloseIcon />}
            color= 'rgb(13, 32, 61)'
            bg='#B3E0F2'
            fontWeight='bold'
            />
          </Flex>
          {buttons.map((button) => (
            <Link to={button.path} key={button.name} onClick={closeMenuHandler}>
              <Button fontSize={{ base: '20px', sm: '20px' }} fontFamily='ARCADECLASSIC' sx={buttonStyles} _hover={buttonHoverStyles}>
                {button.name}
              </Button>
            </Link>
          ))}
          <Button
          background='linear-gradient(to bottom, #FFFFCC, #DAA520)'
          color='#704214'
          variant='solid'
          w={{ base: '140px', sm: '160px' }}
          h={{ base: '50px', sm: '60px' }}
          fontWeight='extrabold'
          fontFamily='ARCADECLASSIC'
          fontSize={{ base:'22px', sm:'23px' }}
          letterSpacing='0.04rem'
          style={imageStyles}
          _hover={buttonHoverStyles}
          borderRadius='25px'
        >
          {!formIsValid ? <Box>Login</Box> : <Box>Logout</Box>}
        </Button>
        </Flex>
        </VStack>
      )}
    </HStack>
  );
};