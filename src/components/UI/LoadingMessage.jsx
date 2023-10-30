import MessageCustom from './MessageCustom';
import KikiChibi from '../images/website-img/KikiChibi.png';

const LoadingMessage = () => {
  return (
    <MessageCustom
      text='Loading...'
      src={KikiChibi}
    />
  );
};

export default LoadingMessage;
