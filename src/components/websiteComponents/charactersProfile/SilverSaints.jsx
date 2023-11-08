import { Flex, Image, Box } from '@chakra-ui/react';
// import { useFetch } from '../../hooks/useFetch';
import classes from './Saints.module.css';
import Marin from '../../images/silver-img/EagleMarin.jpeg';
import Shaina from '../../images/silver-img/OphiuchusShaina.jpeg';
import Misty from '../../images/silver-img/LizardMisty.jpeg';
import Moses from '../../images/silver-img/WhaleMoses.jpeg';
import Asterion from '../../images/silver-img/HoundAsterion.jpeg';
import Babel from '../../images/silver-img/CentaurusBabel.jpeg';
import Jamian from '../../images/silver-img/CrowJamian.jpeg';
import Algol from '../../images/silver-img/PerseusAlgol.jpeg';
import Capella from '../../images/silver-img/AurigaCapella.jpeg';
import Dante from '../../images/silver-img/CerberusDante.jpeg';
import Algethi from '../../images/silver-img/HeraclesAlgethi.jpeg';
import Dio from '../../images/silver-img/MuscaDio.jpeg';
import Sirius from '../../images/silver-img/CanisMajorSirius.jpeg';
import Ptolemy from '../../images/silver-img/SagittaPtolemy.jpeg';
import Albiore from '../../images/silver-img/CepheusAlbiore.jpeg';
import Shiva from '../../images/silver-img/PeacockShiva.jpeg';
import Agora from '../../images/silver-img/LotusAgora.jpeg';
import Arachne from '../../images/silver-img/TarantulaArachne.jpeg';
import Spartan from '../../images/silver-img/PyxisSpartan.jpeg';
import Orphee from '../../images/silver-img/LyraOrphee.jpeg';
// import ErrorCustom from '../../UI/ErrorCustom';
import fakeDatabase from '../../../json/db.json';

const silverSaintsData = fakeDatabase.website[0].silver;
const features = fakeDatabase.website[0].features;

const images = {
  Marin,
  Shaina,
  Misty,
  Moses,
  Asterion,
  Babel,
  Jamian,
  Algol,
  Capella,
  Dante,
  Algethi,
  Dio,
  Sirius,
  Ptolemy,
  Albiore,
  Shiva,
  Agora,
  Arachne,
  Spartan,
  Orphee,
};

const addImageToCard = (card) => {
  const newCard = { ...card };
  newCard.source = images[card.source];
  return newCard;
};

const SilverSaints = () => {
  // const fetchUrl = 'http://localhost:3000/website';
  // const errorMessage = 'Failed to fetch Silver Saints';

  // const { error, fetchedData } = useFetch(
  //   fetchUrl,
  //   errorMessage
  // );

  // if (error) {
  //   return <ErrorCustom message={errorMessage} />;
  // }

  // const silverSaints = fetchedData
  //   ? fetchedData[0]?.silver?.map(addImageToCard)
  //   : [];
  // const features = fetchedData ? fetchedData[0]?.features : [];

  const silverSaints = silverSaintsData.map(addImageToCard);

  const renderSaintFeatures = (saint) =>
    features?.map((feature) => (
      <Flex key={feature.key}>
        <Box fontWeight='extrabold'>{feature.label}:</Box>
        <Box fontWeight='medium'>{saint[feature.key]}</Box>
      </Flex>
    ));

  const silverSaintsList = (
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
      {silverSaints?.map((saint) => (
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
            className={`${classes.CommonCardStyles} ${classes.SilverCardStyles}`}
          >
            {renderSaintFeatures(saint)}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );

  return silverSaintsList;
};

export default SilverSaints;
