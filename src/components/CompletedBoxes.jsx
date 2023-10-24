import { Box } from "@chakra-ui/react";
import Boxes from './Boxes';
import pegasusCloth1 from '../images/PegasusCloth1.png';
import popeSaga from '../images/PopeSaga.webp';

const CompletedBoxes = () => {

  const emailLink = 'mailto:sanchezruizfederico@gmail.com';

  return (
    <Box>
    <Boxes
        path={'inventory'}
        image={pegasusCloth1}
        heading={'Feel the Power'}
        text={
          'Check your inventory to behold the prizes you have acquired throughout the missions.'
        }
      />
      <Boxes
        path={emailLink}
        mx={{ base: 'none', sm: '20px', md: '30px', lg: '40px' }}
        image={popeSaga}
        heading={'Any Questions?'}
        text={
          'Feel free to click Pope Saga to contact the creator for any doubts you may have.'
        }
        flexDir={'row-reverse'}
      />
      </Box>
  )
};

export default CompletedBoxes;