import { Flex, Heading, Image } from "@chakra-ui/react";
import ariesMu from '../images/AriesMu.png';

const About = () => {

  const flexStyles = {
    flexDir: 'column',
    flex: '1',
    mx: '5px',
    my: '2px',
    h: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  };

  const headingStyles = {
    textAlign: 'center',
    fontFamily: 'papyrus',
    fontWeight: 'bold',
    color: '#321e0e',
  };

  return (
    <Flex
      h='430px'
      mx={{base:'2%', sm: '2%', md: '6%', lg: '8%', xl: '14%'}}
      mb='50px'
      mt='130px'
      justifyContent='center'
      flexDir={{base: 'column', sm: 'column', md: 'row'}}
      flexWrap={{base: 'wrap', lg: 'nowrap'}}
    >
      <Image display={{ base: 'none', md: 'none', lg: 'block', xl: 'block' }} maxW='80%' src={ariesMu} />

    <Flex flexDir={{base: "column", sm: 'row', md: 'row'}} justifyContent='center' alignItems='center' flexWrap='wrap'>

      <Flex className="papyrus-box" {...flexStyles}>
        <Heading {...headingStyles}>Saint Seiya</Heading>
        <Flex px='4px' textAlign='center' fontFamily='papyrus' fontWeight='bold' color='#321e0e'lineHeight='30px'>Saint Seiya is a manga and anime originally created by Masami Kurumada in 1985. The plot of the story centers around a group of young warriors known as Saints that fight alongside the Greek Goddess Athena to protect humanity against the forces of evil.
        </Flex>
      </Flex>

      <Flex className="papyrus-box" {...flexStyles}>
        <Heading {...headingStyles}>Cosmos Warriors</Heading>
        <Flex px='4px' textAlign='center' fontFamily='papyrus' fontWeight='bold' color='#321e0e' lineHeight='30px'>Cosmos Warriors is a Saint Seiya demo website created by me, Federico Sánchez, with the purpose of putting into practice many of the React concepts that I have learnt so far about the world of web development.</Flex>
      </Flex>

     </Flex>
    </Flex>
  )
};

export default About;