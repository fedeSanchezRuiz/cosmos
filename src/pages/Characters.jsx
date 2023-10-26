import { Flex, Box } from '@chakra-ui/react';
import MiddleTab from '../components/UI/MiddleTab';
import MessageCustom from '../components/UI/MessageCustom';
import CardWrapper from '../components/UI/CardWrapper';
import ShakaMeditate from '../../src/components/images/website-img/ShakaMeditation.png';

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
        <MessageCustom
          text={<Box>'Pick your Saint'</Box>}
          src={ShakaMeditate}
        />
      </Flex>
    </CardWrapper>
  );
};

export default Characters;
