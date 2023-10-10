import { Flex, Image, Box } from '@chakra-ui/react';
import pegasusBlack from '../black-img/BlackPegasus.jpeg';
import dragonBlack from '../black-img/BlackDragon.jpeg';
import cygnusBlack from '../black-img/BlackCygnus.jpeg';
import andromedaBlack from '../black-img/BlackAndromeda.jpeg';
import phoenixBlack from '../black-img/BlackPhoenix.jpeg';

const blackSaintsList = [
  {
    name: 'BlackPegasus',
    country: 'Israel',
    age: '15',
    height: '1.70cm',
    weight: '58kg',
    cloth: 'BlackPegasus',
    attacks: ['Black Meteor Fist'],
    source: pegasusBlack,
  },
  {
    name: 'BlackDragon',
    country: 'Poland',
    age: '15',
    height: '1.73cm',
    weight: '62kg',
    cloth: 'BlackDragon',
    attacks: ['Black Rising Dragon'],
    source: dragonBlack,
  },
  {
    name: 'BlackCygnus',
    country: 'Finland',
    age: '15',
    height: '1.73cm',
    weight: '61kg',
    cloth: 'BlackCygnus',
    attacks: ['Black Blizzard'],
    source: cygnusBlack,
  },
  {
    name: 'BlackAndromeda',
    country: 'Turkey',
    age: '14',
    height: '1.70cm',
    weight: '58kg',
    cloth: 'BlackAndromeda',
    attacks: ['Black Fang Nebula'],
    source: andromedaBlack,
  },
  {
    name: 'BlackPhoenix',
    country: 'unknown',
    age: 'unknown',
    height: 'unknown',
    weight: 'unknown',
    cloth: 'BlackPhoenix',
    attacks: ['Black Phoenix Illusion'],
    source: phoenixBlack,
  },
];

const BlackSaints = () => {
  // function fetchBronzeSaintsHandler() {
  //   fetch('https://cosmos-92e61-default-rtdb.firebaseio.com/bronze.json').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     data.results
  //   });
  // }

  const cardStyle = {
    w: '140px',
    justifyContent: 'center',
  };

  return (
    <Flex
      mt='3%'
      textAlign='center'
      justifyContent='center'
      alignItems='center'
      wrap='wrap'
    >
      {blackSaintsList.map((saint) => (
        <Flex
          flexDir='row'
          key={saint.name}
          justifyContent='center'
          alignItems='center'
          // textAlign='center'
          flexWrap='wrap'
        >
          <Image
            w='50%'
            key={saint.source}
            src={saint.source}
            margin='3% auto'
          />
          <Flex
            fontFamily='ARCADECLASSIC'
            fontSize={{
              sm: '1.2rem',
              md: '1.3rem',
              lg: '1.5rem',
              xl: '1.5rem',
            }}
            h={{
              base: '202.5px',
              sm: '275px',
              md: '403.5px',
              lg: '492.5px',
              xl: '492.5px',
            }}
            w='50%'
            bg='linear-gradient(to bottom, #1F1F1F, #4F4F4F, #A9A9A9)'
            color='#E3DAC9'
            flexDir='column'
            // textAlign='left'
            justifyContent='space-evenly'
            alignItems='center'
            border='4px solid #000000'
            flexWrap='wrap'
          >
            <Flex sx={{ ...cardStyle }}>
              <Box fontWeight='extrabold'>Name:</Box>
              <Box fontWeight='medium'>{saint.name}</Box>
            </Flex>
            <Flex sx={{ ...cardStyle }}>
              <Box fontWeight='extrabold'>Country:</Box>
              <Box fontWeight='medium'>{saint.country}</Box>
            </Flex>
            <Flex sx={{ ...cardStyle }}>
              <Box fontWeight='extrabold'>Age:</Box>
              <Box fontWeight='medium'>{saint.age}</Box>
            </Flex>
            <Flex sx={{ ...cardStyle }}>
              <Box fontWeight='extrabold'>Height:</Box>
              <Box fontWeight='medium'>{saint.height}</Box>
            </Flex>
            <Flex sx={{ ...cardStyle }}>
              <Box fontWeight='extrabold'>Weight:</Box>
              <Box fontWeight='medium'>{saint.weight}</Box>
            </Flex>
            <Flex sx={{ ...cardStyle }}>
              <Box fontWeight='extrabold'>Cloth:</Box>
              <Box fontWeight='medium'>{saint.cloth}</Box>
            </Flex>
            {/* <Box fontWeight='extrabold'><Flex>Cloth:<Box fontWeight='medium'>{saint.attacks}</Box></Flex></Box> */}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default BlackSaints;