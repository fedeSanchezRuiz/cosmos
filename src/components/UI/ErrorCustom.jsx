import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Cardwrapper from './CardWrapper';
import Navbar from './navbar/Navbar';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import classes from './ErrorCustom.module.css';
import Deathmask from '../images/website-img/DM.png';

const ErrorCustom = ({
  errorMessage = 'Could not find this page!',
}) => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('..');
  }

  const errorElement = (
    <>
      <Cardwrapper>
        <Navbar />
        <Box
          className={classes.boxStyles}
          mb={{
            base: '-50px',
            sm: '-35px',
            md: '20px',
            lg: '18px',
            xl: '10px',
          }}
        >
          <Heading
            className={classes.heading}
            fontFamily='ARCADECLASSIC'
          >
            An error occurred!
          </Heading>
          <Text className={classes.text}>{errorMessage}</Text>
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
    </>
  );

  return (
    <>
      {ReactDOM.createPortal(
        errorElement,
        document.getElementById('error-root')
      )}
    </>
  );
};

export default ErrorCustom;
