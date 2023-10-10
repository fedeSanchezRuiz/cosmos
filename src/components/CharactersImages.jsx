import { Flex, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bronze3 from '../images/BronzeSaints3.webp';
import black from '../images/BlackSaints2.webp';
import silver from '../images/SilverSaints2.jpeg';
import gold from '../images/GoldSaints.jpeg';
import asgard from '../images/AsgardSaints.png';
import poseidon from '../images/PoseidonSaints2.jpeg';

export const CharactersImages = () => {

  const images = [
    { name: 'BronzeSaints', image: bronze3, path: '/characters/Bronze' },
    { name: 'BlackSaints', image: black, path: '/characters/Black' },
    { name: 'SilverSaints', image: silver, path: '/characters/Silver' },
    { name: 'GoldSaints', image: gold, path: '/characters/Gold' },
    { name: 'AsgardWarriors', image: asgard, path: '/characters/Asgard' },
    { name: 'PoseidonScales', image: poseidon, path: '/characters/Poseidon' },
  ];

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const imageHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
    opacity: 0.8,
  };

  return (
    <Flex
      justifyContent='center'
      wrap='wrap'
    >
      {images.map((image) => (
        <Box key={image.name}>
          <Link to={image.path}>
          <Image
            style={imageStyles}
            _hover={imageHoverStyles}
            w={{ base: '400px', sm: '450px', md: '500px', lg: '650px' }}
            h={{ base: '210', sm: '270px', md: '320px', lg: '400px' }}
            mt={{ base: '6px', sm: '8px', md: '10px', lg: '30px' }}
            mx={{ sm: 'none', md: '10px', lg: '35px' }}
            borderRadius='20px'
            
            src={image.image}
            alt={image.name}
          />
          </Link>
        </Box>
      ))}
    </Flex>
  );
};