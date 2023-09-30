import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import deathmask from '../images/DM.png';

const ErrorPage = () => {

  const navigate = useNavigate();

  function navigateHandler() {
    navigate('..');
  };

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const imageHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),
    opacity: 0.8
  };

  return (
    <Fragment>
      <Navbar />
      <Box textAlign='center' h='430px' mx='40px' mb='40px' mt='140px' className="main-content">
        <Heading>An error occured!</Heading>
        <Text>Could not find this page!</Text>
        <Flex justifyContent='center'>
        <Image h='400px' src={deathmask} style={imageStyles} _hover={imageHoverStyles} onClick={navigateHandler} />
        </Flex>
      </Box>
    </Fragment>
  )
};

export default ErrorPage;