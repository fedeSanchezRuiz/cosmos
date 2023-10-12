import { Flex, Image, Box } from '@chakra-ui/react';
import classes from './Saints.module.css';
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
    type: 'black',
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
    type: 'black',
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
    type: 'black',
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
    type: 'black',
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
    type: 'black',
  },
];

const saintProperties = [
  { label: 'Name', key: 'name' },
  { label: 'Country', key: 'country' },
  { label: 'Age', key: 'age' },
  { label: 'Height', key: 'height' },
  { label: 'Weight', key: 'weight' },
  { label: 'Cloth', key: 'cloth' },
];

const renderSaintProperties = (saint) => (
  saintProperties.map((property) => (
    <Flex className={classes.cardWrap} key={property.key}>
      <Box fontWeight='extrabold'>{property.label}:</Box>
      <Box fontWeight='medium'>{saint[property.key]}</Box>
    </Flex>
  ))
);

const BlackSaints = () => {
  // function fetchBronzeSaintsHandler() {
  //   fetch('https://cosmos-92e61-default-rtdb.firebaseio.com/bronze.json').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     data.results
  //   });
  // }

  return (
    <Flex className={classes.totalFlex}>
      {blackSaintsList.map((saint) => (
        <Flex
          key={saint.name}
          className={classes.outerFlex}
          >
          <Image
            className={classes.imageStyle}
            src={saint.source}
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
            className={classes.BlackCardStyles}
          >
            {renderSaintProperties(saint)}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default BlackSaints;