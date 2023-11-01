import { Flex, Image, Box } from '@chakra-ui/react';
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
import LoadingMessage from '../../UI/LoadingMessage';
import ErrorCustom from '../../UI/ErrorCustom';
import { useFetch } from '../../hooks/useFetch';

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
  const fetchUrl = 'http://localhost:3000/website';
  const errorMessage = 'Failed to fetch Bronze Saints';

  const { isFetching, error, fetchedData } = useFetch(
    fetch,
    fetchUrl,
    errorMessage
  );

  if (error) {
    return <ErrorCustom message={errorMessage} />;
  }

  const bronzeSaints = fetchedData
    ? fetchedData[0]?.bronze?.map(addImageToCard)
    : [];
  const features = fetchedData ? fetchedData[0]?.features : [];

  const renderSaintFeatures = (saint) =>
    features?.map((feature) => (
      <Flex
        className={classes.cardWrap}
        key={feature.key}
      >
        <Box fontWeight='extrabold'>{feature.label}:</Box>
        <Box fontWeight='medium'>{saint[feature.key]}</Box>
      </Flex>
    ));

  const bronzeSaintsList = (
    <Flex className={classes.totalFlex}>
      {bronzeSaints?.map((saint) => (
        <Flex
          key={saint.source}
          className={classes.outerFlex}
        >
          <Image
            className={classes.imageStyle}
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
            h={{
              base: '202.5px',
              sm: '275px',
              md: '403.5px',
              lg: '492.5px',
              xl: '492.5px',
            }}
            className={classes.BronzeCardStyles}
          >
            {renderSaintFeatures(saint)}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );

  return isFetching ? <LoadingMessage /> : bronzeSaintsList;
};

export default BronzeSaints;
