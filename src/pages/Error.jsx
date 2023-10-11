import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/UI/navbar/Navbar';
import deathmask from '../images/DM.png';
import Footer from '../components/UI/Footer';
import classes from './Error.module.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('..');
  }

  return (
    <Fragment>
      <Navbar />
      <Box className={classes.boxStyles}>
        <Heading
          className={classes.heading}
          fontFamily='ARCADECLASSIC'
        >
          An error occured!
        </Heading>
        <Text className={classes.text}>
          Could not find this page!
        </Text>
        <Flex justifyContent='center'>
          <Image
            className={classes.imageStyles}
            src={deathmask}
            onClick={navigateHandler}
          />
        </Flex>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
