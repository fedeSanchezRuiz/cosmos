import { Box, HStack, Heading, Image, Tag } from "@chakra-ui/react";

const Container = () => {
  return (
    <Box as='section' bg='gray' h='100vh'>
      <Box maxW='420px' bg='white' p='6'>
        <Image
          src='https://p7.hiclipart.com/preview/554/887/605/pegasus-seiya-chibi-art-anime-saint-seiya-knights-of-the-zodiac-sagittarius.jpg'
          alt='Saggitarius-Aiolos'
          borderRadius='xl'
          objectFit='cover'
          mx='auto'
        />
        <HStack>
          <Tag></Tag>
        </HStack>
        <Heading my='4' size='lg'>Saint Seiya</Heading>
        <Text></Text>
        <Center my='6'>
          <Button colorScheme='blue'>Learn more</Button>
        </Center>
      </Box>
    </Box>
  )
};

export default Container;