import React from 'react'
import { Box, Heading, Text, Container, Button } from "@chakra-ui/react";
const Header = () => {
    const imageHoverStyles = {
        transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
        opacity: 0.8
      };
      const imageStyles = {
        transition: 'transform 0.3s', // Add a smooth transition effect
      };
      const boxHoverStyles = {
        transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
      };
  return (
    <Box textAlign='center'>
        <Heading p='10px' fontSize='40'>Burn your Cosmos!</Heading>
        <Container>
          <Text p='10px' mt='20px' class='text-with-shadow'>Join Pegasus Seiya and his friends on this adventure against the forces of evil to decide the fate of the Earth!</Text>
        </Container>
        <Box my='50px'>
          <Button size='lg' styles={imageStyles} _hover={boxHoverStyles} boxShadow='2px 2px 4px rgba(0, 0, 0, 0.5)' fontWeight='extrabold' background='linear-gradient(to bottom, #FFFFCC, #DAA520)' color='#704214'>PLAY NOW</Button>
        </Box>
      </Box>
  )
}

export default Header