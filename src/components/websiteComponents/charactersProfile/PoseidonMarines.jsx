import { Flex, Image, Box } from '@chakra-ui/react';
// import { useFetch } from '../../hooks/useFetch';
import classes from './Saints.module.css';
import Thetis from '../../images/marines-img/MermaidThetis.jpeg';
import Baian from '../../images/marines-img/SeaHorseBaian.jpeg';
import Io from '../../images/marines-img/ScyllaIo.jpeg';
import Krishna from '../../images/marines-img/ChrysaorKrishna.jpeg';
import Kaza from '../../images/marines-img/LyumnadesKaza.jpeg';
import Isaac from '../../images/marines-img/KrakenIsaac.jpeg';
import Sorrento from '../../images/marines-img/SirenSorrento.jpeg';
import Kanon from '../../images/marines-img/SeaDragonKanon.jpeg';
// import ErrorCustom from '../../UI/ErrorCustom';
import fakeDatabase from '../../../json/db.json';

const poseidonMarinesData = fakeDatabase.website[0].poseidon;
const features = fakeDatabase.website[0].features;

const images = {
  Thetis,
  Baian,
  Io,
  Krishna,
  Kaza,
  Isaac,
  Sorrento,
  Kanon,
};

const addImageToCard = (card) => {
  const newCard = { ...card };
  newCard.source = images[card.source];
  return newCard;
};

const PoseidonMarines = () => {
  // const fetchUrl = 'http://localhost:3000/website';
  // const errorMessage = 'Failed to fetch Poseidon Marines';

  // const { error, fetchedData } = useFetch(
  //   fetchUrl,
  //   errorMessage
  // );

  // if (error) {
  //   return <ErrorCustom message={errorMessage} />;
  // }

  // const poseidonMarines = fetchedData
  //   ? fetchedData[0]?.poseidon?.map(addImageToCard)
  //   : [];
  // const features = fetchedData ? fetchedData[0]?.features : [];

  const poseidonMarines = poseidonMarinesData.map(addImageToCard);

  const renderSaintFeatures = (marine) =>
    features?.map((feature) => (
      <Flex key={feature.key}>
        <Box fontWeight='extrabold'>{feature.label}:</Box>
        <Box fontWeight='medium'>{marine[feature.key]}</Box>
      </Flex>
    ));

  const poseidonMarinesList = (
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
      {poseidonMarines?.map((marine) => (
        <Flex
          width='620px'
          wrap='wrap'
          key={marine.source}
          boxShadow='8px 8px 16px rgba(0, 0, 0, 0.8)'
        >
          <Image
            maxH='423px'
            w='55%'
            src={marine.source}
            alt={marine.name}
          />
          <Flex
            fontFamily='ARCADECLASSIC'
            fontSize={{
              sm: '1.2rem',
              md: '1.3rem',
              lg: '1.5rem',
              xl: '1.5rem',
            }}
            className={`${classes.CommonCardStyles} ${classes.PoseidonCardStyles}`}
          >
            {renderSaintFeatures(marine)}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );

  return poseidonMarinesList;
};

export default PoseidonMarines;
