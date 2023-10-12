import { Flex, Spacer } from '@chakra-ui/react';
import { NavbarLogo } from './NavbarLogo';
import { NavbarButtons } from './NavbarButtons';
import classes from './Navbar.module.css';

export default function Navbar() {

  return (
    <Flex 
      className={classes.navbarStyles}
      my={{ base: '5px', md: '8px', lg: '10px' }}
      mx={{ base: '10px', md: '20px', lg: '50px' }}
    >
      <NavbarLogo />
      <Spacer />
      <NavbarButtons />
    </Flex>
  );
};
