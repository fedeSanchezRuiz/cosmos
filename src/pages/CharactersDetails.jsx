import { useMatch } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import SaintsTab from "../components/UI/SaintsTab";
import Cardwrapper from "../components/UI/CardWrapper";
import ComingSoon from "../components/UI/ComingSoon";
import shakaMeditate from '../images/ShakaMeditation.png';
import BronzeSaints from "../components/saintsSanctuary/BronzeSaints";
import BlackSaints from "../components/saintsSanctuary/BlackSaints";

const CharacterDetails = () => {
    const isBronzeMatch = useMatch('/characters/Bronze');
    // const isBlackMatch = useMatch('characters/Black')

    let saintsToRender = <ComingSoon src={shakaMeditate} />;

    if (isBronzeMatch) {
        saintsToRender = <BronzeSaints />;
    } else {
        saintsToRender = <BlackSaints />;
    };

    return (
        <Box mt={{ base: '30%', sm: '22%', md: '14%', lg: '12%', xl: '10%' }}>
       <Cardwrapper>
          <SaintsTab />
          {saintsToRender}
       </Cardwrapper>
       </Box>
    )
};

export default CharacterDetails;