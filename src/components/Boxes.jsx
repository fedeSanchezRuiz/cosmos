import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Boxes = ({
  image,
  flexDir = 'row',
  heading,
  text,
  path,
}) => {
  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const boxHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
  };

  return (
    <Flex
      px={{ base: '10px', sm: '10px', lg: 'none' }}
      flexDir={{ base: 'column', lg: 'row' }}
      mx={{ base: 'none', lg: '40px' }}
      my={{ base: '20px', md: '30px', lg: '40px' }}
      background='linear-gradient(to bottom, #FFFFCC, #DAA520)'
      borderRadius='10px'
      justifyContent='space-around'
      textAlign='center'
      h={{ base: '180px', sm: '200px', md: '250px', lg: '400px' }}
    >
      <Flex
        flexDir={flexDir}
        alignItems='center'
        w={{ base: 'none', lg: '1000px' }}
      >
        <Link to={path}>
        <Image
          style={imageStyles}
          _hover={boxHoverStyles}
          w={{ base: '120px', sm: '175px', md: '220px', lg: '350px' }}
          mt='10px'
          borderRadius='20px'
          src={image}
          alt={image}
        />
        </Link>
        <Box>
          <Heading fontFamily='ARCADECLASSIC' letterSpacing='0.1rem' wordSpacing='1rem' fontSize={{ base: '25px', sm: '28px', md: '32px', lg: '40px', xl: '40px' }}>{heading}</Heading>
          <Text 
          letterSpacing='0.05rem' fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px' }}
          px={{base: 'none', sm: '5px', md: '80px', lg: 'none' }}>{text}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Boxes;