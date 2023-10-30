import { Box } from '@chakra-ui/react';
import { Header } from '../components/websiteComponents/Header';
import MiddleContent from '../components/websiteComponents/MiddleContent';
import LowerContentFull from '../components/websiteComponents/LowerContentFull';
import TopContent from '../components/websiteComponents/TopContent';

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
      <TopContent />
      <MiddleContent />
      <LowerContentFull />
    </Box>
  );
};

export default HomePage;
