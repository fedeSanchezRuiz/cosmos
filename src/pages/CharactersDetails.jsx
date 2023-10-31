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
  const isBronzeMatch = useMatch('/characters/Bronze');
  const isBlackMatch = useMatch('/characters/Black');
  const isSilverMatch = useMatch('/characters/Silver');
  const isGoldMatch = useMatch('/characters/Gold');
  const isAsgardMatch = useMatch('/characters/Asgard');
  const isPoseidonMatch = useMatch('/characters/Poseidon');

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
