import { Flex, Spacer } from '@chakra-ui/react';
import { NavbarLogo } from './NavbarLogo';
import { NavbarButtons } from './NavbarButtons';

export default function Navbar() {

  const navbarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, #B3E0F2, #002855)',
    zIndex: 5,
    borderRadius: '10px',
  };

  return (
    <Flex 
      style={navbarStyles}
      my={{ base: '5px', md: '8px', lg: '10px' }}
      mx={{ base: '5px', md: '20px', lg: '50px' }}
      boxShadow='lg'
    >
      <NavbarLogo />
      <Spacer />
      <NavbarButtons />
    </Flex>
  );
};
