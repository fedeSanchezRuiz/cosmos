import { Flex, Spacer } from '@chakra-ui/react';
import { NavbarLogo } from './NavbarLogo';
import { NavbarButtons } from './NavbarButtons';
import starryBack from '../../../images/StarryBack.jpeg';

export default function Navbar() {

    const navbarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: `linear-gradient(to top, rgba(179, 224, 242, 0.9), rgba(0, 40, 85, 0.8)), url(${starryBack})`,
     // Set the background image
    backgroundPosition: 'center', // Center the background image
    backgroundRepeat: 'no-repeat', // Do not repeat the background image
    backgroundSize: 'cover', // Cover the entire element with the background image
    zIndex: 5,
    borderRadius: '10px',
  };

  return (
    <Flex 
      style={navbarStyles}
      my={{ base: '5px', md: '8px', lg: '10px' }}
      mx={{ base: '10px', md: '20px', lg: '50px' }}
      boxShadow='lg'
    >
      <NavbarLogo />
      <Spacer />
      <NavbarButtons />
    </Flex>
  );
};
