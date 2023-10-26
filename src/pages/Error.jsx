import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Cardwrapper from '../components/UI/CardWrapper';
import Navbar from '../components/UI/navbar/Navbar';
import Footer from '../components/UI/Footer';
import ReactDOM from 'react-dom';
import classes from './Error.module.css';
import Deathmask from '../../src/components/images/website-img/DM.png';

const ErrorPage = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('..');
  }

  const ErrorContent = () => {
    return (
      <Fragment>
        <Cardwrapper>
          <Navbar />
          <Box
            className={classes.boxStyles}
            mb={{
              base: '-50px',
              sm: '-35px',
              md: '28px',
              lg: '22px',
              xl: '0',
            }}
          >
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
                src={Deathmask}
                h={{
                  base: '300px',
                  sm: '300px',
                  md: '350px',
                  lg: '400px',
                  xl: '400px',
                }}
                onClick={navigateHandler}
              />
            </Flex>
          </Box>
        </Cardwrapper>
        <Footer />
      </Fragment>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ErrorContent />,
        document.getElementById('error-root')
      )}
    </Fragment>
  );
};

export default ErrorPage;