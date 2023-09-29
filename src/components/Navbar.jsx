import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Heading, Spacer, Button, IconButton, Image, TableContainer } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import logoSS from '../images/SS-Logo.webp';

export default function Navbar() {
  const navbarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'linear-gradient(to top, #B3E0F2, #002855)',
    //background: 'linear-gradient(to top, #FFA700, #C87D1F)',
  };

  const buttonStyles = {
    w: '150px',
    h: '45px',
    bg: 'transparent',
    color: '#C0C0C0',
    variant: 'solid',
    colorScheme: 'blackAlpha',
  };

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const imageHoverStyles = {
    transform: 'scale(1.03)', // Increase the size by 10% (adjust as needed),
    opacity: 0.5
  };

  const buttonHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),

  };

  return (
    <Flex style={navbarStyles} my='10px' mx={{ base: "15px", md: "50px", lg: "56px" }} as='nav' borderRadius='10px' p='10px' bg='blue.500' wrap='wrap' gap='1' boxShadow='lg' overflow='hidden'>
      <Heading as='h1'>
        <Link to='/'>
          <TableContainer>
            <Box w='150px' h='60px' color='silver' style={imageStyles} _hover={imageHoverStyles}>
              <Image
                src={logoSS}
                h='40px'
                ml='10px'
                alt='Saint-Seiya'
              />
              <Image
                src={logo}
                h='20px'
                alt='Cosmo-Warriors'
              />
            </Box>
          </TableContainer>
        </Link>
      </Heading>
      <Spacer />
      <IconButton aria-label='Open Menu' size='lg' mr={2} icon={<HamburgerIcon />} display={['flex', 'flex', 'none', 'none']} />
      <HStack spacing='30px' alignItems='center' display={{ base: "none", lg:'block' }}>
        <Link to='cosmos'>
          <Button sx={buttonStyles} style={imageStyles} _hover={buttonHoverStyles}>About</Button>
        </Link>
        <Link to='rules'>
          <Button sx={buttonStyles} style={imageStyles} _hover={buttonHoverStyles}>Rules</Button>
        </Link>
        <Link to='characters'>
          <Button sx={buttonStyles} style={imageStyles} _hover={buttonHoverStyles}>Characters</Button>
        </Link>
        <Link to='cloths'>
          <Button sx={buttonStyles} style={imageStyles} _hover={buttonHoverStyles}>Cloths</Button>
        </Link>
        <Button variant='solid' sx={buttonStyles} style={imageStyles} _hover={buttonHoverStyles}>Login</Button>
      </HStack>
    </Flex>
  );
}
