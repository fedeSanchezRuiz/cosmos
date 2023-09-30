import { Heading, Link, TableContainer, Box, Image } from '@chakra-ui/react';
import logo from '../../images/Logo.png';
import logoSS from '../../images/SS-Logo.webp';

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
  )
};
