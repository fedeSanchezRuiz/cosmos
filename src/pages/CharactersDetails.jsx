import { useMatch } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import MiddleTab from '../components/UI/MiddleTab';
import Cardwrapper from '../components/UI/CardWrapper';
import MessageCustom from '../components/UI/MessageCustom';
import shakaMeditate from '../../src/components/images/website-img/ShakaMeditation.png';
import BronzeSaints from '../components/websiteComponents/charactersProfile/BronzeSaints';
import BlackSaints from '../components/websiteComponents/charactersProfile/BlackSaints';
import ErrorCustom from '../components/UI/ErrorCustom';

const CharacterDetails = () => {
  const isBronzeMatch = useMatch('/characters/bronze');
  const isBlackMatch = useMatch('/characters/black');
  const isSilverMatch = useMatch('/characters/silver');
  const isGoldMatch = useMatch('/characters/gold');
  const isAsgardMatch = useMatch('/characters/asgard');
  const isPoseidonMatch = useMatch('/characters/poseidon');

  let saintsToRender;

  switch (true) {
    case !!isBronzeMatch:
      saintsToRender = <BronzeSaints />;
      break;
    case !!isBlackMatch:
      saintsToRender = <BlackSaints />;
      break;
    case !!isSilverMatch || !!isGoldMatch || !!isAsgardMatch || !!isPoseidonMatch:
      saintsToRender = <MessageCustom src={shakaMeditate} />;
      break;
    default:
      saintsToRender = <ErrorCustom title='404' message='Page not Found' />;
  }

  return (
    <Box
      mt={{
        base: '30%',
        sm: '22%',
        md: '14%',
        lg: '12%',
        xl: '10%',
      }}
    >
      <Cardwrapper>
        <MiddleTab />
        {saintsToRender}
      </Cardwrapper>
    </Box>
  );
};

export default CharacterDetails;
