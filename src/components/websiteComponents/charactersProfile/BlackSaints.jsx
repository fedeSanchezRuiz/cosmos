import { Flex, Image, Box } from '@chakra-ui/react';
import { useFetch } from '../../hooks/useFetch';
import classes from './Saints.module.css';
import PegasusBlack from '../../images/black-img/BlackPegasus.jpeg';
import DragonBlack from '../../images/black-img/BlackDragon.jpeg';
import CygnusBlack from '../../images/black-img/BlackCygnus.jpeg';
import AndromedaBlack from '../../images/black-img/BlackAndromeda.jpeg';
import PhoenixBlack from '../../images/black-img/BlackPhoenix.jpeg';
import ErrorCustom from '../../UI/ErrorCustom';

const images = {
  PegasusBlack,
  DragonBlack,
  CygnusBlack,
  AndromedaBlack,
  PhoenixBlack,
};

const addImageToCard = (card) => {
  const newCard = { ...card };
  newCard.source = images[card.source];
  return newCard;
};

const BlackSaints = () => {
  const fetchUrl = 'http://localhost:3000/website';
  const errorMessage = 'Failed to fetch Black Saints';

  const { error, fetchedData } = useFetch(
    fetchUrl,
    errorMessage
  );

  if (error) {
    return <ErrorCustom message={errorMessage} />;
  }

  const blackSaints = fetchedData ? fetchedData[0]?.black?.map(addImageToCard) : [];
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

    const blackSaintsList = (
      <Flex
      my={{ base: '10%', sm: '7%', md: '6%', lg: '5%', xl: '5%' }}
        h='100%'
        gap={{ base: '20px', sm: '25px', md: '35px', lg: '40px', xl: '40px' }}
        flexWrap='wrap'
        width='100%'
        justifyContent='space-evenly'
        alignItems='center'
      >
        {blackSaints?.map((saint) => (
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
              className={`${classes.CommonCardStyles} ${classes.BlackCardStyles}`}
            >
              {renderSaintFeatures(saint)}
            </Flex>
          </Flex>
        ))}
      </Flex>
    );
  
    return blackSaintsList;
  };

export default BlackSaints;
