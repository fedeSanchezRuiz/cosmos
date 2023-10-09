import { Heading, Flex, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.png';
import logoSS from '../../../images/SS-Logo.webp';

export const NavbarLogo = () => {

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const imageHoverStyles = {
    transform: 'scale(1.03)', // Increase the size by 10% (adjust as needed),
    opacity: 0.5
  };

  return (
    <Heading as='h1'>
      <Link to='/'>
        <Flex alignItems='center'>
          <Box
            p='8px'
            style={imageStyles}
            _hover={imageHoverStyles}
            opacity='0.8'
           >
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
        </Flex>
      </Link>
    </Heading>
  )
};
