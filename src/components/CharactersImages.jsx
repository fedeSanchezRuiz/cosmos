import { Flex, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bronzeSaints from '../../src/components/images/website-img/BronzeSaints3.webp';
import blackSaints from '../../src/components/images/website-img/BlackSaints2.webp';
import silverSaints from '../../src/components/images/website-img/SilverSaints2.jpeg';
import goldSaints from '../../src/components/images/website-img/GoldSaints.jpeg';
import asgardSaints from '../../src/components/images/website-img/AsgardSaints.png';
import poseidonSaints from '../../src/components/images/website-img/PoseidonSaints2.jpeg';

export const CharactersImages = () => {

  const images = [
    { name: 'BronzeSaints', image: bronzeSaints, path: '/characters/Bronze' },
    { name: 'BlackSaints', image: blackSaints, path: '/characters/Black' },
    { name: 'SilverSaints', image: silverSaints, path: '/characters/Silver' },
    { name: 'GoldSaints', image: goldSaints, path: '/characters/Gold' },
    { name: 'AsgardWarriors', image: asgardSaints, path: '/characters/Asgard' },
    { name: 'PoseidonScales', image: poseidonSaints, path: '/characters/Poseidon' },
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