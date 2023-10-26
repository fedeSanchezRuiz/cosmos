import { useMatch } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import MiddleTab from '../components/UI/MiddleTab';
import Cardwrapper from '../components/UI/CardWrapper';
import ComingSoon from '../components/UI/ComingSoon';
import shakaMeditate from '../../src/components/images/website-img/ShakaMeditation.png';
import BronzeSaints from '../components/websiteComponents/charactersProfile/BronzeSaints';
import BlackSaints from '../components/websiteComponents/charactersProfile/BlackSaints';

const CharacterDetails = () => {
  const isBronzeMatch = useMatch('/characters/Bronze');
  const isBlackMatch = useMatch('characters/Black');

  let saintsToRender = '';

  if (isBronzeMatch) {
    saintsToRender = <BronzeSaints />;
} else if(isBlackMatch) {
    saintsToRender = <BlackSaints />;
} else {
    saintsToRender = <ComingSoon src={shakaMeditate} />
};

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