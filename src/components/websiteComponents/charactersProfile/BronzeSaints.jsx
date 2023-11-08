import { Flex, Image, Box } from '@chakra-ui/react';
// import { useFetch } from '../../hooks/useFetch';
import classes from './Saints.module.css';
import Seiya from '../../images/bronze-img/SeiyaPegasus2.jpeg';
import Shiryu from '../../images/bronze-img/ShiryuDragon2.jpeg';
import Hyoga from '../../images/bronze-img/HyogaCygnus2.jpeg';
import Shun from '../../images/bronze-img/ShunAndromeda.jpeg';
import Ikki from '../../images/bronze-img/IkkiPhoenix2.jpeg';
import Jabu from '../../images/bronze-img/JabuUnicorn2.jpeg';
import Ban from '../../images/bronze-img/BanLeon.jpeg';
import Geki from '../../images/bronze-img/GekiOso.jpeg';
import Ichi from '../../images/bronze-img/IchiHydra.jpeg';
import Nachi from '../../images/bronze-img/NachiLobo.jpeg';
// import ErrorCustom from '../../UI/ErrorCustom';
import fakeDatabase from '../../../json/db.json';

const bronzeSaintsData = fakeDatabase.website[0].bronze;
const features = fakeDatabase.website[0].features;

const images = {
  Seiya,
  Shiryu,
  Hyoga,
  Shun,
  Ikki,
  Jabu,
  Ban,
  Geki,
  Ichi,
  Nachi,
};

const addImageToCard = (card) => {
  const newCard = { ...card };
  newCard.source = images[card.source];
  return newCard;
};

const BronzeSaints = () => {
  // const fetchUrl = 'http://localhost:3000/website';
  // const errorMessage = 'Failed to fetch Bronze Saints';

  // const { error, fetchedData } = useFetch(
  //   fetchUrl,
  //   errorMessage
  // );

  // if (error) {
  //   return <ErrorCustom message={errorMessage} />;
  // }

  // const bronzeSaints = fetchedData
  //   ? fetchedData[0]?.bronze?.map(addImageToCard)
  //   : [];
  // const features = fetchedData ? fetchedData[0]?.features : [];

  const bronzeSaints = bronzeSaintsData.map(addImageToCard);

  const renderSaintFeatures = (saint) =>
    features?.map((feature) => (
      <Flex key={feature.key}>
        <Box fontWeight='extrabold'>{feature.label}:</Box>
        <Box fontWeight='medium'>{saint[feature.key]}</Box>
      </Flex>
    ));

  const bronzeSaintsList = (
    <Flex
      my={{
        base: '10%',
        sm: '7%',
        md: '6%',
        lg: '5%',
        xl: '5%',
      }}
      h='100%'
      gap={{
        base: '20px',
        sm: '25px',
        md: '35px',
        lg: '40px',
        xl: '40px',
      }}
      flexWrap='wrap'
      width='100%'
      justifyContent='space-evenly'
      alignItems='center'
    >
      {bronzeSaints?.map((saint) => (
        <Flex
          width='620px'
          wrap='wrap'
          key={saint.source}
          boxShadow='8px 8px 16px rgba(0, 0, 0, 0.8)'
        >
          <Image
            maxH='423px'
            w='55%'
            src={saint.source}
            alt={saint.name}
          />
          <Flex
            fontFamily='ARCADECLASSIC'
            fontSize={{
              sm: '1.2rem',
              md: '1.3rem',
              lg: '1.5rem',
              xl: '1.5rem',
            }}
            className={`${classes.CommonCardStyles} ${classes.BronzeCardStyles}`}>
            {renderSaintFeatures(saint)}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );

  return bronzeSaintsList;
};

export default BronzeSaints;
