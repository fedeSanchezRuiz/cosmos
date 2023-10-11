import ComingSoon from "../components/UI/ComingSoon";
import Cardwrapper from "../components/UI/CardWrapper";
import shakaMeditate from '../images/ShakaMeditation.png';

const Inventory = () => {
  
  return (
      <Cardwrapper>
       <ComingSoon src={shakaMeditate} />
      </Cardwrapper>
  )
};

export default Inventory;