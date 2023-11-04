import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import MiddleTab from '../components/UI/MiddleTab';
import Cardwrapper from '../components/UI/CardWrapper';
import MessageCustom from '../components/UI/MessageCustom';
import shakaMeditate from '../../src/components/images/website-img/ShakaMeditation.png';
import BronzeSaints from '../components/websiteComponents/charactersProfile/BronzeSaints';
import BlackSaints from '../components/websiteComponents/charactersProfile/BlackSaints';
import ErrorCustom from '../components/UI/ErrorCustom';

const CharacterDetails = () => {
  const { saintsId } = useParams();

  let saintsToRender;

  switch (saintsId) {
    case 'Bronze':
      saintsToRender = <BronzeSaints />;
      break;
    case 'Black':
      saintsToRender = <BlackSaints />;
      break;
    case 'Silver':
    case 'Gold':
    case 'Asgard':
    case 'Poseidon':
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
