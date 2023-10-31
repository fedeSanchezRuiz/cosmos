import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import classes from './ErrorCustom.module.css';
import Deathmask from '../images/website-img/DM.png';

const ErrorCustom = ({
  title = 'An error occurred!',
  message = 'Could not find this page!',
  imageHeight = {
    base: '230px',
    sm: '280px',
    md: '330px',
    lg: '340px',
    xl: '350px',
  },
  marginTop = {
    base: '20%',
    sm: '17%',
    md: '6%',
    lg: '4%',
    xl: '3%'
  },
}) => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('..');
  }

  return (
    <>
      <Navbar />
      <Box
        className={classes.boxStyles}
      >
        <Heading
          className={classes.heading}
          fontFamily='ARCADECLASSIC'
          mt={marginTop}
        >
          {title}
        </Heading>
        <Text
          className={classes.text}
          wordSpacing='2px'
        >
          {message}
        </Text>
        <Flex justifyContent='center'>
          <Image
            className={classes.imageStyles}
            src={Deathmask}
            h={imageHeight}
            onClick={navigateHandler}
          />
        </Flex>
      </Box>
    </>
  );
};

export default ErrorCustom;
