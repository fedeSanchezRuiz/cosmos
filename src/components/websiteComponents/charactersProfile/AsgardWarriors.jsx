import { Flex, Image, Box } from '@chakra-ui/react';
import { useFetch } from '../../hooks/useFetch';
import classes from './Saints.module.css';
import Thor from '../../images/warriors-img/PhecdaThor.jpeg';
import Fenrir from '../../images/warriors-img/AliothFenril.jpeg';
import Hagen from '../../images/warriors-img/MerakHagen.jpeg';
import Mime from '../../images/warriors-img/BenetnaschMime.jpeg';
import Alberich from '../../images/warriors-img/MegrezAlberich.jpeg';
import Syd from '../../images/warriors-img/MizarZyd.jpeg';
import Bud from '../../images/warriors-img/AlcorBud.jpeg';
import Siegfried from '../../images/warriors-img/DubheSiegfried.jpeg';
import ErrorCustom from '../../UI/ErrorCustom';

const images = {
  Thor,
  Fenrir,
  Hagen,
  Mime,
  Alberich,
  Syd,
  Bud,
  Siegfried,
};

const addImageToCard = (card) => {
  const newCard = { ...card };
  newCard.source = images[card.source];
  return newCard;
};

const AsgardWarriors = () => {
  const fetchUrl = 'http://localhost:3000/website';
  const errorMessage = 'Failed to fetch Asgard Saints';

  const { error, fetchedData } = useFetch(
    fetchUrl,
    errorMessage
  );

  if (error) {
    return <ErrorCustom message={errorMessage} />;
  }

  const asgardWarriors = fetchedData
    ? fetchedData[0]?.asgard?.map(addImageToCard)
    : [];
  const features = fetchedData ? fetchedData[0]?.features : [];

  const renderSaintFeatures = (warrior) =>
    features?.map((feature) => (
      <Flex key={feature.key}>
        <Box fontWeight='extrabold'>{feature.label}:</Box>
        <Box fontWeight='medium'>{warrior[feature.key]}</Box>
      </Flex>
    ));

  const asgardWarriorsList = (
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
      {asgardWarriors?.map((warrior) => (
        <Flex
          width='620px'
          wrap='wrap'
          key={warrior.source}
          boxShadow='8px 8px 16px rgba(0, 0, 0, 0.8)'
        >
          <Image
            maxH='423px'
            w='55%'
            src={warrior.source}
            alt={warrior.name}
          />
          <Flex
            fontFamily='ARCADECLASSIC'
            fontSize={{
              sm: '1.2rem',
              md: '1.3rem',
              lg: '1.5rem',
              xl: '1.5rem',
            }}
            className={`${classes.CommonCardStyles} ${classes.AsgardCardStyles}`}
          >
            {renderSaintFeatures(warrior)}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );

  return asgardWarriorsList;
};

export default AsgardWarriors;
