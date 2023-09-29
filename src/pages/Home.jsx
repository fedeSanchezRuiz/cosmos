import { Box, Image, Flex, Heading, Text, Container, Button } from "@chakra-ui/react";
import bronze3 from '../images/BronzeSaints3.webp';
import black from '../images/BlackSaints2.webp';
import silver from '../images/SilverSaints2.jpeg';
import gold from '../images/GoldSaints.jpeg';
import asgard from '../images/AsgardSaints.png';
import poseidon from '../images/PoseidonSaints2.jpeg';
import pegasusBox from '../images/PegasusBox2.png';
import athena from '../images/Athena2.png';
import { Link } from "react-router-dom";

const images = [
  {name: 'Bronze Saints', image: bronze3 },
  {name: 'Black Saints', image: black },
  {name: 'Silver Saints', image: silver },
  {name: 'Gold Saints', image: gold },
  {name: 'Asgard Warriors', image: asgard },
  {name: 'Poseidon Scales', image: poseidon },
]

const HomePage = () => {

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const imageHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
    opacity: 0.8
  };

  const boxHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
  };

  return (
    <Box mx='40px' mb='40px' mt='140px' className="main-content">

      <Box textAlign='center'>
        <Heading p='10px' fontSize='40'>Burn your Cosmos!</Heading>
        <Container w='450px'>
          <Text p='10px' mt='20px' class='text-with-shadow'>Join Pegasus Seiya and his friends on this adventure against the forces of evil to decide the fate of the Earth!</Text>
        </Container>
        <Box my='50px'>
          <Button size='lg' styles={imageStyles} _hover={boxHoverStyles} boxShadow='2px 2px 4px rgba(0, 0, 0, 0.5)' fontWeight='extrabold' background='linear-gradient(to bottom, #FFFFCC, #DAA520)' color='#704214'>PLAY NOW</Button>
        </Box>
      </Box>

      <Flex flexDir='row' justifyContent='center' alignItems='center' p='10px' m='20px' wrap='wrap'>
        {images.map(image => <Box mx='40px'><Image className="image-test" style={imageStyles} _hover={imageHoverStyles} w='650px' minW='500px' h='400px' mt='30px' borderRadius='20px' src={image.image} alt={image.name} /></Box>)}
      </Flex>

      <Box mx='40px' my='50px' h='250px' background='linear-gradient(to bottom, #FFFFCC, #DAA520)' borderRadius='10px' display='flex' alignItems='center'>
        <Flex alignItems='center' justify='space-between' w='100%' wrap='wrap'>
          <Link to='cloths'>
            <Image ml='50px' style={imageStyles} _hover={boxHoverStyles} w='350px' h='400px' mt='30px' borderRadius='20px' src={pegasusBox} alt='pegasus-box' />
          </Link>
          <Container>
            <Heading fontSize='40' ml='20px'>Feel the Power</Heading>
            <Text>Discover the secrets of ancient alchemy hidden behind the sacred armors!</Text>
          </Container>
        </Flex>
      </Box>
      <Box mx='40px' my='50px' h='250px' background='linear-gradient(to bottom, #FFFFCC, #DAA520)' borderRadius='10px' display='flex' alignItems='center'>
        <Flex flexDir='row-reverse' alignItems='center' justify='space-between' w='100%' wrap='wrap'>
          <Image mr='50px' style={imageStyles} _hover={boxHoverStyles} w='350px' h='400px' mt='30px' borderRadius='20px' src={athena} alt='athena' />
          <Container>
            <Heading fontSize='40' ml='70px'>Any Questions?</Heading>
            <Text ml='50px'>Goddess Athena will answer any questions you may have.</Text>
          </Container>
        </Flex>
      </Box>
    </Box>
  )
};

export default HomePage;