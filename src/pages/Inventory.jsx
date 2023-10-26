import MessageCustom from "../components/UI/MessageCustom";
import Cardwrapper from "../components/UI/CardWrapper";
import shakaMeditate from '../components/images/website-img/ShakaMeditation.png';

const Inventory = () => {
  
  return (
      <Cardwrapper>
       <MessageCustom src={shakaMeditate} />
      </Cardwrapper>
  )
};

export default Inventory;