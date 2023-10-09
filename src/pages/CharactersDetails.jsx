import { useMatch } from "react-router-dom";
import SaintsTab from "../components/UI/SaintsTab";
import Cardwrapper from "../components/UI/CardWrapper";
import ComingSoon from "../components/UI/ComingSoon";
import shakaMeditate from '../images/ShakaMeditation.png';
import BronzeSaints from "../components/saintsSanctuary/BronzeSaints";
import BlackSaints from "../components/saintsSanctuary/BlackSaints";

const CharacterDetails = () => {
    const isBronzeMatch = useMatch('/characters/Bronze');
    const isBlackMatch = useMatch('characters/Black')

    let saintsToRender;

    if (isBronzeMatch) {
        saintsToRender = <BronzeSaints />;
    } else if (isBlackMatch) {
        saintsToRender = <BlackSaints />;
    } else {
        saintsToRender = <ComingSoon src={shakaMeditate} />;
    }

    return (
       <Cardwrapper>
          <SaintsTab />
          {saintsToRender}
       </Cardwrapper>
    )
};

export default CharacterDetails;