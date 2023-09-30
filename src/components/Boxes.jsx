import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export const Boxes = ({ image, flexDir = 'row', heading, text }) => {

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const boxHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
  };

  return (
    <Box mx={{ sm: 'none', lg: '40px'}} my='40px' background='linear-gradient(to bottom, #FFFFCC, #DAA520)' borderRadius='10px' display='flex' textAlign='center' alignItems='center'>
      <Flex flexDir={flexDir} justifyContent='left' alignItems='center' wrap='wrap'>
          <Image style={imageStyles} _hover={boxHoverStyles} w={{ sm: '160px', lg: '350px' }} h={{ sm: '180px', lg: '400px'}} mt='30px' borderRadius='20px' src={image} alt={image} />
        <Box>
          <Heading fontSize='40'>{heading}</Heading>
          <Text>{text}</Text>
        </Box>
      </Flex>
    </Box>
  )
};
