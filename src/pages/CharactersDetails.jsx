import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import MiddleTab from '../components/UI/MiddleTab';
import Cardwrapper from '../components/UI/CardWrapper';
import BronzeSaints from '../components/websiteComponents/charactersProfile/BronzeSaints';
import BlackSaints from '../components/websiteComponents/charactersProfile/BlackSaints';
import GoldSaints from '../components/websiteComponents/charactersProfile/GoldSaints';
import AsgardWarriors from '../components/websiteComponents/charactersProfile/AsgardWarriors';
import PoseidonMarines from '../components/websiteComponents/charactersProfile/PoseidonMarines';
import ErrorCustom from '../components/UI/ErrorCustom';
import SilverSaints from '../components/websiteComponents/charactersProfile/SilverSaints';

const CharacterDetails = () => {
  const { saintsId } = useParams();

  let saintsToRender;

  switch (saintsId) {
    case 'bronze':
      saintsToRender = <BronzeSaints />;
      break;
    case 'black':
      saintsToRender = <BlackSaints />;
      break;
    case 'gold':
      saintsToRender = <GoldSaints />;
      break;
      case 'asgard':
      saintsToRender = <AsgardWarriors />;
      break;
    case 'poseidon':
      saintsToRender = <PoseidonMarines />;
      break;
    case 'silver':
      saintsToRender = <SilverSaints />;
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
