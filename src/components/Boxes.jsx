import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export const Boxes = ({ image, flexDir = 'row', heading, text }) => {

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
      h={{ base: '180px', lg: '400px' }}
    >
      <Flex
        flexDir={flexDir}
        alignItems='center'
        w={{ base: 'none', lg: '1000px' }}
      >
        <Image
          style={imageStyles}
          _hover={boxHoverStyles}
          w={{ base: '160px', lg: '350px' }}
          mt='30px'
          borderRadius='20px'
          src={image}
          alt={image}
        />
        <Box>
          <Heading fontSize='40'>{heading}</Heading>
          <Text>{text}</Text>
        </Box>
      </Flex>
    </Flex>
  )
};
