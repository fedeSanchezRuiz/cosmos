import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import BronzeChibi from '../images/BronzeGroup.png';
import Milo from '../images/MiloChibi2.png';
import Saori from '../images/SaoriChibi.png';

export default function FightCollect() {
  return (
      <Flex
        my={{base: '6%', sm: '6%', md: '0'}}
        minH='500px'
        flexDir={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}
        w='100%'
        alignItems='center'
        justifyContent={{ base: 'space-around', sm: 'space-around', md: 'space-evenly'}}
      >


        <Flex 
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          w={{ base: '100%', sm: '90%', md: '50%', lg: '40%', xl: '33%' }}
        >
          <Flex
            alignItems='center'
            justifyContent='center'
          >
            <Image
              w='100%'
              h={{ base: '160px', sm:'200px', md: '250px' }}
              src={Milo}
            />
          </Flex>
          <Text
            display='flex'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            fontFamily='ARCADECLASSIC'
            fontSize={{
              base: '44px',
              sm: '46px',
              md: '50px',
              lg: '55px',
              xl: '60px',
            }}
          >
            Fight
          </Text>
          <Text
            display={{ base: 'none', sm: 'flex', md: 'flex' }}
            w={{ base: '90%', sm: '80%', md: '90%', lg: '80%', xl: '70%' }}
            border='5px solid'
            borderRadius='10px'
            justifyContent='center'
            alignItems='center'
            paddingX='28px'
            textAlign='center'
            minH='150px'
            maxH='200px'
          >
            Join Pegasus Seiya and his friends on this adventure to decide the fate of the Earth against the forces of evil!
          </Text>
        </Flex>

        <Flex
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          w={{ base: '100%', sm: '90%', md: '50%', lg: '40%', xl: '33%' }}
        >
          <Image
            h={{ base: '160px', sm:'200px', md: '250px' }}
            src={BronzeChibi}
          />
          <Text
            w='100%'
            display='flex'
            justifyContent='center'
            fontFamily='ARCADECLASSIC'
            fontSize={{
              base: '44px',
              sm: '46px',
              md: '50px',
              lg: '55px',
              xl: '60px',
            }}
          >
            Collect
          </Text>
          <Text
            display={{ base: 'none', sm: 'flex', md: 'flex' }}
            w={{ base: '90%', sm: '80%', md: '90%', lg: '80%', xl: '70%' }}
            border='5px solid'
            borderRadius='10px'
            justifyContent='center'
            alignItems='center'
            paddingX='28px'
            textAlign='center'
            minH='150px'
            maxH='200px'
          >
           Discover and collect all the characters in Saint Seiya universe by defeating your enemies and completing the missions.
          </Text>
        </Flex>

        <Flex 
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          w={{ base: '100%', sm: '90%', md: '50%', lg: '40%', xl: '33%' }}
        >
          <Flex
            alignItems='center'
            justifyContent='center'
          >
            <Image
              w='100%'
              h={{ base: '160px', sm:'200px', md: '250px' }}
              src={Saori}
            />
          </Flex>
          <Text
            display='flex'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            fontFamily='ARCADECLASSIC'
            fontSize={{
              base: '44px',
              sm: '46px',
              md: '50px',
              lg: '55px',
              xl: '60px',
            }}
          >
            Enjoy
          </Text>
          <Text
            display={{ base: 'none', sm: 'flex', md: 'flex' }}
            w={{ base: '90%', sm: '80%', md: '90%', lg: '80%', xl: '70%' }}
            border='5px solid'
            borderRadius='10px'
            justifyContent='center'
            alignItems='center'
            paddingX='28px'
            textAlign='center'
            minH='150px'
            maxH='200px'
          >
            Goddess Athena will be by your side to help you awake your seventh sense, so don't be afraid and enjoy the journey!
          </Text>
        </Flex>
        
      </Flex>
  );
};