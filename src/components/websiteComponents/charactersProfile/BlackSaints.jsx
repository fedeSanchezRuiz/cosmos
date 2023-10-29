import { useState, useEffect } from 'react';
import { Flex, Image, Box } from '@chakra-ui/react';
import classes from './Saints.module.css';
import PegasusBlack from '../../images/black-img/BlackPegasus.jpeg';
import DragonBlack from '../../images/black-img/BlackDragon.jpeg';
import CygnusBlack from '../../images/black-img/BlackCygnus.jpeg';
import AndromedaBlack from '../../images/black-img/BlackAndromeda.jpeg';
import PhoenixBlack from '../../images/black-img/BlackPhoenix.jpeg';

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
  const [blackSaintsData, setBlackSaintsData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);

  useEffect(() => {
    const fetchBlackSaintsData = async () => {
      let url = 'http://localhost:3000/website';
      const response = await fetch(url);
      const data = await response.json();
      setBlackSaintsData(data);
      setFeaturesData(data);
    }
    fetchBlackSaintsData();
  }, []);

  const blackSaints = blackSaintsData[0]?.black?.map(addImageToCard);
  const features = featuresData[0].features;

  const renderSaintProperties = (saint) => (
    features.map((feature) => (
      <Flex className={classes.cardWrap} key={feature.key}>
        <Box fontWeight='extrabold'>{feature.label}:</Box>
        <Box fontWeight='medium'>{saint[feature.key]}</Box>
      </Flex>
    ))
  );

  return (
    <Flex className={classes.totalFlex}>
      {blackSaints.map((saint) => (
        <Flex
          key={saint.name}
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