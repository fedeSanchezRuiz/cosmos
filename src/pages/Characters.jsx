import { Flex, Box } from '@chakra-ui/react';
import MiddleTab from '../components/UI/MiddleTab';
import ComingSoon from '../components/UI/ComingSoon';
import CardWrapper from '../components/UI/CardWrapper';
import ShakaMeditate from '../images/ShakaMeditation.png';

const Characters = () => {
  return (
    <CardWrapper>
      <Flex
        flexDir='column'
        textAlign='center'
        justifyContent='center'
        alignItems='center'
        wrap='wrap'
        mt='2%'
      >
        <MiddleTab />
        <ComingSoon
          text={<Box>'Pick your Saint'</Box>}
          src={ShakaMeditate}
        />
      </Flex>
    </CardWrapper>
  );
};

export default Characters;
