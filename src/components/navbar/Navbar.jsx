import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Spacer, IconButton, } from '@chakra-ui/react';
import { NavbarLogo } from './NavbarLogo';
import { NavbarButtons } from './NavbarButtons';

export default function Navbar() {
  const navbarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'linear-gradient(to top, #B3E0F2, #002855)',
  };

  return (
    <Flex style={navbarStyles} my='10px' mx={{ sm: '5px', md: '20px', lg: '50px' }} as='nav' borderRadius='10px' p='10px' wrap='wrap' gap='1' boxShadow='lg' overflow='hidden'>
      <NavbarLogo />
      <Spacer />
      <IconButton aria-label='Open Menu' size='lg' mr={2} icon={<HamburgerIcon />} display={['flex', 'flex', 'none', 'none']} />
      <NavbarButtons />
    </Flex>
  );
};
