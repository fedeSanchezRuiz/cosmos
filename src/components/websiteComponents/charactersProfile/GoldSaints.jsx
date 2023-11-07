import { Flex, Image, Box } from '@chakra-ui/react';
import { useFetch } from '../../hooks/useFetch';
import classes from './Saints.module.css';
import Mu from '../../images/gold-img/AriesMu.jpeg';
import Aldebaran from '../../images/gold-img/TaurusAldebaran.jpeg';
import Saga from '../../images/gold-img/GeminiSaga.jpeg';
import DeathMask from '../../images/gold-img/CancerDM.jpeg';
import Aiolia from '../../images/gold-img/LeoAiolia.jpeg';
import Shaka from '../../images/gold-img/VirgoShaka.jpeg';
import Dohko from '../../images/gold-img/LibraDohko.jpeg';
import Milo from '../../images/gold-img/ScorpioMilo.jpeg';
import Aiolos from '../../images/gold-img/SagittariusAiolos.jpeg';
import Shura from '../../images/gold-img/CapricornShura.jpeg';
import Camus from '../../images/gold-img/AquariusCamus.jpeg';
import Aphrodite from '../../images/gold-img/PiscesAphrodite.jpeg';
import ErrorCustom from '../../UI/ErrorCustom';

const images = {
  Mu,
  Aldebaran,
  Saga,
  DeathMask,
  Aiolia,
  Shaka,
  Dohko,
  Milo,
  Aiolos,
  Shura,
  Camus,
  Aphrodite,
};

const addImageToCard = (card) => {
  const newCard = { ...card };
  newCard.source = images[card.source];
  return newCard;
};

const GoldSaints = () => {
  const fetchUrl = 'http://localhost:3000/website';
  const errorMessage = 'Failed to fetch Gold Saints';

  const { error, fetchedData } = useFetch(
    fetchUrl,
    errorMessage
  );

  if (error) {
    return <ErrorCustom message={errorMessage} />;
  }

  const goldSaints = fetchedData
    ? fetchedData[0]?.gold?.map(addImageToCard)
    : [];
  const features = fetchedData ? fetchedData[0]?.features : [];

  const renderSaintFeatures = (saint) =>
    features?.map((feature) => (
      <Flex key={feature.key}>
        <Box fontWeight='extrabold'>{feature.label}:</Box>
        <Box fontWeight='medium'>{saint[feature.key]}</Box>
      </Flex>
    ));

  const goldSaintsList = (
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
      {goldSaints?.map((saint) => (
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
            className={`${classes.CommonCardStyles} ${classes.GoldCardStyles}`}
          >
            {renderSaintFeatures(saint)}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );

  return goldSaintsList;
};

export default GoldSaints;
