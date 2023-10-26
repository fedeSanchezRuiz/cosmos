import { useContext } from 'react';
import HeartContext from '../../context/heartContext';
import EndScreen from './EndScreen';
import PopaSagaBackground from '../../components/images/chapter1-img/PopeSaga.jpeg';

const GameOver = () => {

  const { resetHeartCount } = useContext(HeartContext);

  return (
    <EndScreen
      text='  Game Over'
      backgroundImage={PopaSagaBackground}
      buttonTexts={['Reset', 'Exit']}
      navigatePaths={['/intro', '/']}
      livesLost={3}
      resetHeartCount={resetHeartCount}
    />
  );
};

export default GameOver;