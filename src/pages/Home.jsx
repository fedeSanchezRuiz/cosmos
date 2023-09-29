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
import { Header, Test } from "../components/Home";
import Card from "../components/Home/Card/Card";

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


      <Header/>

      <Flex flexDir='row' justifyContent='center' alignItems='center' p='10px' m='20px' wrap='wrap'>
        {images.map(image => 
        <Box  mx={{ base: "10px", lg: "40px" }} key={image.name}>
          <Image  
          objectFit={'cover'}
          style={imageStyles} _hover={imageHoverStyles}      
          h={'300px'}
          w={'500px'}               
          mt='30px' 
          borderRadius='20px' 
          src={image.image} alt={image.name} />
        </Box>)}
      </Flex>
      <Card headingText={'Feel the Power'} text={'Discover the secrets of ancient alchemy hidden behind the sacred armors!'} src={pegasusBox} />
      <Card headingText={'Any Questions?'} text={'DGoddess Athena will answer any questions you may have.'} src={athena} flexDir='row-reverse'/>
      {/* <Box mx='40px' my='50px' h='250px' background='linear-gradient(to bottom, #FFFFCC, #DAA520)' borderRadius='10px' display='flex' alignItems='center' padding={'30px'}>
        <Flex alignItems='center' justify='space-between' w='100%' wrap='wrap' >
          <Link to='cloths'>
            <Image display={{ base: "none", lg:'block' }} ml='50px' style={imageStyles} _hover={boxHoverStyles} w='350px' h='400px' mt='30px' borderRadius='20px' src={pegasusBox} alt='pegasus-box' />
          </Link>
          <Box px='20px'>
            <Heading fontSize='40' marginBottom={'10px'}>Feel the Power</Heading>
            <Text>Discover the secrets of ancient alchemy hidden behind the sacred armors!</Text>
          </Box>
        </Flex>
      </Box>
      <Box mx='40px' my='50px' h='250px' background='linear-gradient(to bottom, #FFFFCC, #DAA520)' borderRadius='10px' display='flex' alignItems='center'>
        <Flex flexDir='row-reverse' alignItems='center' justify='space-between' w='100%' wrap='wrap'>
          <Image display={{ base: "none", lg:'block' }} mr='50px' style={imageStyles} _hover={boxHoverStyles} w='350px' h='400px' mt='30px' borderRadius='20px' src={athena} alt='athena' />
          <Box  px='20px'>
            <Heading fontSize='40'  marginBottom={'10px'} >Any Questions?</Heading>
            <Text >Goddess Athena will answer any questions you may have.</Text>
          </Box>
        </Flex>
      </Box> */}
     
      
    </Box>
  )
};

export default HomePage;