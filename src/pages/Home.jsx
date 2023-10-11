import { Box } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { CharactersImages } from '../components/CharactersImages';
import CompletedBoxes from '../components/CompletedBoxes';
import FightCollect from '../components/FightCollect';

const HomePage = () => {
  return (
    <Box
      mx='40px'
      mb='40px'
      mt={{
        base: '90px',
        sm: '100px',
        md: '120px',
        lg: '140px',
      }}
    >
      <Header />
      <FightCollect />
      <CharactersImages />
      <CompletedBoxes />
    </Box>
  );
};

export default HomePage;
