import { Flex, Box, Image } from "@chakra-ui/react";
import bronze3 from '../images/BronzeSaints3.webp';
import black from '../images/BlackSaints2.webp';
import silver from '../images/SilverSaints2.jpeg';
import gold from '../images/GoldSaints.jpeg';
import asgard from '../images/AsgardSaints.png';
import poseidon from '../images/PoseidonSaints2.jpeg';

const images = [
  { name: 'Bronze Saints', image: bronze3 },
  { name: 'Black Saints', image: black },
  { name: 'Silver Saints', image: silver },
  { name: 'Gold Saints', image: gold },
  { name: 'Asgard Warriors', image: asgard },
  { name: 'Poseidon Scales', image: poseidon },
];

export const CharactersImages = () => {

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const imageHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
    opacity: 0.8
  };

  return (
    <Flex justifyContent='center' wrap='wrap'>
      {images.map(image =>
        <Box mx={{ sm: 'none', lg: '40px' }}>
          <Image
            style={imageStyles}
            _hover={imageHoverStyles}
            w={{ sm: '400px', md: '500px', lg: '650px' }}
            h={{ base: '250', md: '320px', lg: '400px' }}
            mt={{ base: '6px', md: '10px', lg: '30px' }}
            borderRadius='20px'
            src={image.image}
            alt={image.name} />
        </Box>)}
    </Flex>
  )
};
