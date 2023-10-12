import { Box } from "@chakra-ui/react";
import Boxes from './Boxes';
import pegasusBox from '../images/PegasusBox2.png';
import popeSaga from '../images/PopeSaga.webp';

const CompletedBoxes = () => {

  const emailLink = 'mailto:sanchezruizfederico@gmail.com';

  return (
    <Box>
    <Boxes
        path={'cloths'}
        image={pegasusBox}
        heading={'Feel the Power'}
        text={
          'Discover the secrets of ancient alchemy hidden behind the sacred armors!'
        }
      />
      <Boxes
        path={emailLink}
        mx={{ base: 'none', sm: '20px', md: '30px', lg: '40px' }}
        image={popeSaga}
        heading={'Any Questions?'}
        text={
          'Feel free to click Grand Pope Saga for any doubts you may have.'
        }
        flexDir={'row-reverse'}
      />
      </Box>
  )
};

export default CompletedBoxes;