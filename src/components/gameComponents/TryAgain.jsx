import EndScreen from './EndScreen';
import SeiyaDefeated from '../../images/SeiyaDefeated3.jpg';

const TryAgain = () => {

  return (
    <EndScreen
      text='  Try Again'
      backgroundImage={SeiyaDefeated}
      buttonTexts={['Yes', 'No']}
      navigatePaths={['/chapter1/fight-cassios', '/']}
      livesLost={0}
    />
  );
};

export default TryAgain;