import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { CharactersImages } from "../components/CharactersImages";
import { Boxes } from "../components/Boxes";
import pegasusBox from '../images/PegasusBox2.png';
import athena from '../images/Athena2.png';

const HomePage = () => {

  return (
    <Box mx='40px' mb='40px' mt='140px' className="main-content">
      <Header />
      <CharactersImages />
      <Boxes
        image={pegasusBox}
        heading={'Feel the Power'}
        text={'Discover the secrets of ancient alchemy hidden behind the sacred armors!'}
      />
      <Boxes
        image={athena}
        heading={'Any Questions?'}
        text={'Goddess Athena will answer any questions you may have.'}
        flexDir={'row-reverse'}
      />
    </Box>
  )
};

export default HomePage;