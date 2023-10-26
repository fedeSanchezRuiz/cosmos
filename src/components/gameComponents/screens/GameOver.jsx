import { useContext } from 'react';
import HeartContext from '../../../context/heartContext';
import EndScreen from './EndScreen';
import PopaSagaBackground from '../../images/chapter1-img/PopeSaga.jpeg';

const GameOver = ({ onRestart, onExit }) => {
  const { resetHeartCount } = useContext(HeartContext);

  return (
    <EndScreen
      text='  Game Over'
      backgroundImage={PopaSagaBackground}
      buttonTexts={['Reset', 'Exit']}
      livesLost={3}
      resetHeartCount={resetHeartCount}
      onButtonClick={(buttonText) => {
        if (buttonText === 'Reset') {
          onRestart();
          resetHeartCount();
        } else {
          onExit();
          resetHeartCount();
        }
      }}
    />
  );
};

export default GameOver;