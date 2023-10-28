import { useState, useEffect, useContext } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  HStack,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import LoginModal from '../LoginModal';
import LoginLogoutButton from './LoginLogoutButton';
import AuthContext from '../../../context/authContext';
import starryNight from '../../images/website-img/StarryBack.jpeg';

const buttons = [
  { name: 'About', path: 'about' },
  { name: 'Rules', path: 'rules' },
  { name: 'Characters', path: 'characters' },
  { name: 'Inventory', path: 'inventory' },
];

const imageStyles = {
  transition: 'transform 0.3s',
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
  transform: 'scale(1.05)',
};

export const NavbarButtons = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowMenu]);

  useEffect(() => {
    if (!isLoggedIn) {
      setShowLoginModal(false);
      setShowLogout(true);
    }
  }, [isLoggedIn]);

  const closeLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  const loginButtonClickHandler = () => {
    if (isLoggedIn) {
      logout();
      setShowLogout(false);
    } else {
      setShowLoginModal(true);
    }
  };

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <HStack>
      {!isLoggedIn && showLoginModal && showLogout && (
        <LoginModal onClosingModal={closeLoginModalHandler} />
      )}
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
      <Flex
        display={{
          base: 'none',
          sm: 'none',
          md: 'flex',
          lg: 'flex',
        }}
      >
        {buttons.map((button) => (
          <Link
            to={button.path}
            key={button.name}
          >
            <Button
              fontFamily='ARCADECLASSIC'
              letterSpacing='0.03rem'
              fontSize={{
                base: 'x-small',
                sm: 'small',
                md: 'medium',
                lg: 'medium',
                xl: 'medium',
              }}
              sx={buttonStyles}
              style={imageStyles}
              _hover={{ color: 'white', ...buttonHoverStyles }}
              onClick={closeMenuHandler}
            >
              {button.name}
            </Button>
          </Link>
        ))}
        <LoginLogoutButton
          fontSize={{ md: '18px', lg: '20px', xl: '20px' }}
          onClick={loginButtonClickHandler}
          imageStyles={imageStyles}
          buttonStyles={buttonStyles}
          buttonHoverStyles={{ color: '#5a3517', filter: 'brightness(90%)', ...buttonHoverStyles }}
          width='140px'
          height='45px'
          mx='8px'
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </LoginLogoutButton>
      </Flex>
      {showMenu && (
        <VStack
          position='absolute'
          top='68px'
          left='0'
          width='100%'
          h='56vh'
          display={{
            base: 'flex',
            sm: 'flex',
            md: 'none',
            lg: 'none',
          }}
          background={`linear-gradient(to top, rgba(179, 224, 242, 0.9), rgba(179, 224, 242, 0.8), rgba(179, 224, 242, 0.85)), url(${starryNight})`}
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          backgroundSize='cover'
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
            overflowY='auto'
          >
            <Flex
              w='95%'
              justifyContent='flex-end'
            >
              <IconButton
                onClick={closeMenuHandler}
                aria-label='Close-menu'
                size='lg'
                icon={<CloseIcon />}
                color='rgb(13, 32, 61)'
                bg='#B3E0F2'
                fontWeight='bold'
              />
            </Flex>
            {buttons.map((button) => (
              <Link
                to={button.path}
                key={button.name}
                onClick={closeMenuHandler}
              >
                <Button
                  fontSize={{ base: '20px', sm: '20px' }}
                  fontFamily='ARCADECLASSIC'
                  sx={buttonStyles}
                  _hover={buttonHoverStyles}
                >
                  {button.name}
                </Button>
              </Link>
            ))}
            <LoginLogoutButton
              fontSize={{ base: '22px', sm: '23px' }}
              onClick={loginButtonClickHandler}
              imageStyles={imageStyles}
              buttonStyles={buttonStyles}
              buttonHoverStyles={{ color: '#5a3517', filter: 'brightness(90%)', ...buttonHoverStyles }}
              width={{ base: '140px', sm: '160px' }}
              height={{ base: '50px', sm: '60px' }}
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </LoginLogoutButton>
          </Flex>
        </VStack>
      )}
    </HStack>
  );
};