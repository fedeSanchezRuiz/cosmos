import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import BronzeChibi from '../../components/images/website-img/BronzeGroup.png';
import Milo from '../../components/images/website-img/MiloChibi.png';
import Saori from '../../components/images/website-img/SaoriChibi.png';
import classes from './TopContent.module.css';

export default function TopContent() {
  const milo = (
    <Flex
      className={classes.eachBox}
      w={{
        base: '100%',
        sm: '90%',
        md: '50%',
        lg: '40%',
        xl: '33%',
      }}
    >
      <Flex className={classes.innerBox}>
        <Image
          w='100%'
          h={{ base: '160px', sm: '200px', md: '250px' }}
          src={Milo}
          alt='MiloChibi'
        />
      </Flex>
      <Text
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
        className={classes.textBox}
        display={{ base: 'none', sm: 'flex', md: 'flex' }}
        w={{
          base: '90%',
          sm: '80%',
          md: '90%',
          lg: '80%',
          xl: '70%',
        }}
      >
        Join Pegasus Seiya and his friends on this adventure to
        decide the fate of the Earth against the forces of evil!
      </Text>
    </Flex>
  );

  const bronzeBuddies = (
    <Flex
      className={classes.eachBox}
      w={{
        base: '100%',
        sm: '90%',
        md: '50%',
        lg: '40%',
        xl: '33%',
      }}
    >
      <Flex className={classes.innerBox}>
        <Image
          h={{ base: '160px', sm: '200px', md: '250px' }}
          src={BronzeChibi}
          alt='BronzeSaintsChibi'
        />
      </Flex>
      <Text
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
        className={classes.textBox}
        display={{ base: 'none', sm: 'flex', md: 'flex' }}
        w={{
          base: '90%',
          sm: '80%',
          md: '90%',
          lg: '80%',
          xl: '70%',
        }}
      >
        Discover and collect all the characters in Saint Seiya
        universe by defeating your enemies and completing the
        missions.
      </Text>
    </Flex>
  );

  const athena = (
    <Flex
      className={classes.eachBox}
      w={{
        base: '100%',
        sm: '90%',
        md: '50%',
        lg: '40%',
        xl: '33%',
      }}
    >
      <Flex className={classes.innerBox}>
        <Image
          w='100%'
          h={{ base: '160px', sm: '200px', md: '250px' }}
          src={Saori}
          alt='AthenaChibi'
        />
      </Flex>
      <Text
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
        className={classes.textBox}
        display={{ base: 'none', sm: 'flex', md: 'flex' }}
        w={{
          base: '90%',
          sm: '80%',
          md: '90%',
          lg: '80%',
          xl: '70%',
        }}
      >
        Goddess Athena will be by your side to help you awake
        your seventh sense, so don't be afraid and enjoy the
        journey!
      </Text>
    </Flex>
  );

  return (
    <Flex
      className={classes.totalStyle}
      my={{ base: '6%', sm: '6%', md: '0' }}
      flexDir={{
        base: 'column',
        sm: 'column',
        md: 'row',
        lg: 'row',
        xl: 'row',
      }}
      justifyContent={{
        base: 'space-around',
        sm: 'space-around',
        md: 'space-evenly',
      }}
    >
      {milo}
      {bronzeBuddies}
      {athena}
    </Flex>
  );
}
