import { Box } from '@chakra-ui/react';
import LowerContent from './LowerContent';
import pegasusCloth1 from '../../components/images/website-img/PegasusCloth1.png';
import popeSaga from '../../components/images/website-img/PopeSaga.webp';

const LowerContentFull = () => {
  const emailLink = 'mailto:sanchezruizfederico@gmail.com';

  return (
    <Box>
      <LowerContent
        path={'inventory'}
        image={pegasusCloth1}
        heading={'Feel the Power'}
        text={
          'Check your inventory to behold the prizes you have acquired throughout the missions.'
        }
      />
      <LowerContent
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
  );
};

export default LowerContentFull;