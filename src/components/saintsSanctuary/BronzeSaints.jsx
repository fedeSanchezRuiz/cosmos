import { Flex, Image, Box } from '@chakra-ui/react';
import classes from './Saints.module.css'
import seiya from '../images/bronze-img/SeiyaPegasus2.jpeg';
import shiryu from '../images/bronze-img/ShiryuDragon2.jpeg';
import hyoga from '../images/bronze-img/HyogaCygnus2.jpeg';
import shun from '../images/bronze-img/ShunAndromeda.jpeg';
import ikki from '../images/bronze-img/IkkiPhoenix2.jpeg';
import jabu from '../images/bronze-img/JabuUnicorn2.jpeg';
import ban from '../images/bronze-img/BanLeon.jpeg';
import geki from '../images/bronze-img/GekiOso.jpeg';
import ichi from '../images/bronze-img/IchiHydra.jpeg';
import nachi from '../images/bronze-img/NachiLobo.jpeg';

const saintsList = [
  {
    name: 'Seiya',
    country: 'Japan',
    age: '13',
    height: '1.65cm',
    weight: '53kg',
    cloth: 'Pegasus',
    attacks: ['Pegasus Meteor Fist', 'Pegasus Comet Fist'],
    source: seiya,
    type: 'bronze',
  },
  {
    name: 'Shiryu',
    country: 'China',
    age: '14',
    height: '1.72cm',
    weight: '53kg',
    cloth: 'Dragon',
    attacks: ['Rozan Rising Dragon', 'Rozan Flying Dragon'],
    source: shiryu,
    type: 'bronze',
  },
  {
    name: 'Hyoga',
    country: 'Russia',
    age: '14',
    height: '1.73cm',
    weight: '60kg',
    cloth: 'Cygnus',
    attacks: ['Diamond Dust', 'Aurora Thunder Attack'],
    source: hyoga,
    type: 'bronze',
  },
  {
    name: 'Shun',
    country: 'Japan',
    age: '13',
    height: '1.65cm',
    weight: '51kg',
    cloth: 'Andromeda',
    attacks: ['Nebula Chain', 'Rolling Defense'],
    source: shun,
    type: 'bronze',
  },
  {
    name: 'Ikki',
    country: 'Japan',
    age: '15',
    height: '1.75cm',
    weight: '62kg',
    cloth: 'Phoenix',
    attacks: [
      "Phoenix's Wings Rise",
      "Phoenix's Illusion Demon Fist",
    ],
    source: ikki,
    type: 'bronze',
  },
  {
    name: 'Jabu',
    country: 'Japan',
    age: '13',
    height: '1.65cm',
    weight: '55kg',
    cloth: 'Unicorn',
    attacks: ['Unicorn Gallop'],
    source: jabu,
    type: 'bronze',
  },
  {
    name: 'Ban',
    country: 'Japan',
    age: '14',
    height: '1.81cm',
    weight: '83kg',
    cloth: 'Lionet',
    attacks: ['Lionet Bomber'],
    source: ban,
    type: 'bronze',
  },
  {
    name: 'Geki',
    country: 'Japan',
    age: '15',
    height: '1.88cm',
    weight: '102kg',
    cloth: 'Bear',
    attacks: ['Hanging Bear'],
    source: geki,
    type: 'bronze',
  },
  {
    name: 'Ichi',
    country: 'Japan',
    age: '14',
    height: '1.70cm',
    weight: '56kg',
    cloth: 'Hydra',
    attacks: ['Hydra Fangs'],
    source: ichi,
    type: 'bronze',
  },
  {
    name: 'Nachi',
    country: 'Japan',
    age: '14',
    height: '1.71cm',
    weight: '57kg',
    cloth: 'Wolf',
    attacks: ['Dead Howling'],
    source: nachi,
    type: 'bronze',
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

const BronzeSaints = () => {
  // function fetchBronzeSaintsHandler() {
  //   fetch('https://cosmos-92e61-default-rtdb.firebaseio.com/bronze.json').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     data.results
  //   });
  // }

  return (
    <Flex className={classes.totalFlex}>
      {saintsList.map((saint) => (
        <Flex key={saint.source} className={classes.outerFlex}>
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
            className={classes.BronzeCardStyles}
          >
            {renderSaintProperties(saint)}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default BronzeSaints;