import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import classes from './LowerContent.module.css';
import Night from '../../components/images/website-img/NightSkyBack.jpeg';

const imageStyles = {
  transition: 'transform 0.3s',
};

const boxHoverStyles = {
  transform: 'scale(1.05)',
};

const LowerContent = ({
  image,
  flexDir = 'row',
  heading,
  text,
  path,
}) => {

  return (
    <Flex
      className={classes.totalStyle}
      px={{ base: '10px', sm: '10px', lg: 'none' }}
      flexDir={{ base: 'column', lg: 'row' }}
      mx={{ base: 'none', lg: '40px' }}
      my={{ base: '20px', md: '30px', lg: '40px' }}
      h={{ base: '180px', sm: '200px', md: '250px', lg: '400px' }}
      background={`linear-gradient(to bottom, rgba(255, 255, 204, 1), rgba(218, 165, 32, 0.6)), url(${Night})`}
    >
      <Flex
        flexDir={flexDir}
        alignItems='center'
        w={{ base: 'none', lg: '1000px' }}
      >
        <Link to={path}>
        <Image
          style={imageStyles}
          _hover={{ filter: 'brightness(115%)', ...boxHoverStyles }}
          w={{ base: '120px', sm: '175px', md: '220px', lg: '350px' }}
          maxH={{ base: '160px', sm: '160px', md: '200px', lg: '320px', xl: '320px' }}
          mt='10px'
          src={image}
          alt={image}
        />
        </Link>
        <Box>
          <Heading fontFamily='ARCADECLASSIC' color='#704214' letterSpacing='0.1rem' wordSpacing='1rem' fontSize={{ base: '25px', sm: '28px', md: '32px', lg: '40px', xl: '40px' }}>{heading}</Heading>
          <Text 
          letterSpacing='0.05rem' color='#704214' fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px' }}
          px={{base: 'none', sm: '5px', md: '80px', lg: 'none' }}>{text}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LowerContent;