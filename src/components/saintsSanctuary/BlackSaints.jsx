import { Flex, Image, Box } from '@chakra-ui/react';
import pegasusBlack from '../black-img/BlackPegasus.jpeg';
import dragonBlack from '../black-img/BlackDragon.jpeg';
import cygnusBlack from '../black-img/BlackCygnus.jpeg';
import andromedaBlack from '../black-img/BlackAndromeda.jpeg';
import phoenixBlack from '../black-img/BlackPhoenix.jpeg';

const blackSaintsList = [
  {
    name: 'Black Pegasus',
    country: 'Israel',
    age: '15',
    height: '1.70cm',
    weight: '58kg',
    cloth: 'Black Pegasus',
    attacks: ['Black Meteor Fist'],
    source: pegasusBlack,
  },
  {
    name: 'Black Dragon',
    country: 'Poland',
    age: '15',
    height: '1.73cm',
    weight: '62kg',
    cloth: 'Black Dragon',
    attacks: ['Black Rising Dragon'],
    source: dragonBlack,
  },
  {
    name: 'Black Cygnus',
    country: 'Finland',
    age: '15',
    height: '1.73cm',
    weight: '61kg',
    cloth: 'Black Cygnus',
    attacks: ['Black Blizzard'],
    source: cygnusBlack,
  },
  {
    name: 'Black Andromeda',
    country: 'Turkey',
    age: '14',
    height: '1.70cm',
    weight: '58kg',
    cloth: 'Black Andromeda',
    attacks: ['Black Fang Nebula'],
    source: andromedaBlack,
  },
  {
    name: 'Black Phoenix',
    country: 'unknown',
    age: 'unknown',
    height: 'unknown',
    weight: 'unknown',
    cloth: 'Black Phoenix',
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
    justifyContent: 'left',
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
          textAlign='center'
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
              base: '179px',
              sm: '250px',
              md: '388px',
              lg: '492px',
              xl: '492px',
            }}
            w='50%'
            bg='linear-gradient(to bottom, #A55628, #CD7F32, #E2A45C)'
            flexDir='column'
            textAlign='left'
            justifyContent='space-evenly'
            alignItems='center'
            border='4px solid #7E421C'
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