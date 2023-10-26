import { Heading, Flex, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../images/website-img/Logo.png';
import logoSS from '../../images/website-img/SS-Logo.webp';

export const NavbarLogo = ({ logoWidth, logoHeight, logoSSWidth, logoSSHeight, disableLink }) => {

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const imageHoverStyles = {
    transform: 'scale(1.03)', // Increase the size by 10% (adjust as needed),
    opacity: 0.5
  };

  const navbarContent = (
    <Flex alignItems='center'>
      <Box
        p='8px'
        style={imageStyles}
        _hover={imageHoverStyles}
        opacity='0.7'
      >
        <Image
          src={logoSS}
          h={logoSSHeight}
          w={logoSSWidth}
          ml='10px'
          alt='Saint-Seiya'
        />
        <Image
          src={logo}
          h={logoHeight}
          w={logoWidth}
          alt='Cosmo-Warriors'
        />
      </Box>
    </Flex>
  );

  return (
    <Heading as='h1'>
      {
        disableLink ?
        navbarContent
        :
      <Link to='/'>
        {navbarContent}
      </Link>
     } 
    </Heading>
  )
};