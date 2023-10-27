import { useContext } from 'react';
import HeartContext from '../../../context/heartContext';
import EndScreen from './EndScreen';
import SeiyaDefeatedBackground from '../../images/chapter1-img/SeiyaDefeated3.jpg';

const TryAgain = ({ onTryAgain, onExit }) => {
  const { resetHeartCount } = useContext(HeartContext);

  return (
    <EndScreen
      text='  Try Again'
      backgroundImage={SeiyaDefeatedBackground}
      buttonTexts={['Yes', 'No']}
      livesLost={0}
      onButtonClick={(buttonText) => {
        if (buttonText === 'Yes') {
          onTryAgain();
        } else {
          onExit();
          resetHeartCount();
        }
      }}
    />
  );
};

export default TryAgain;