import React from 'react'
import { Link } from "react-router-dom";
import { Box, Image, Flex, Heading, Text, Container, Button } from "@chakra-ui/react";
const Card = ({headingText, text, flexDir = 'row', src}) => {
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
    <Box mx='40px' my='50px' h='250px' background='linear-gradient(to bottom, #FFFFCC, #DAA520)' borderRadius='10px' display='flex' alignItems='center' padding={'30px'}>
    <Flex flexDir={flexDir} alignItems='center' justify='space-between' w='100%' wrap='wrap' >
      <Link to='cloths'>
        <Image display={{ base: "none", lg:'block' }} ml='50px' style={imageStyles} _hover={boxHoverStyles} w='350px' h='400px' mt='30px' borderRadius='20px' src={src} alt='pegasus-box' />
      </Link>
      <Box px='20px'>
        <Heading fontSize='40' marginBottom={'10px'}>{headingText}</Heading>
        <Text>{text}</Text>
      </Box>
    </Flex>
  </Box>
  )
}

export default Card