import EndScreen from './EndScreen';
import SeiyaDefeatedBackground from '../../components/images/chapter1-img/SeiyaDefeated3.jpg';

const TryAgain = () => {

  return (
    <EndScreen
      text='  Try Again'
      backgroundImage={SeiyaDefeatedBackground}
      buttonTexts={['Yes', 'No']}
      navigatePaths={['/chapter1/fight-cassios', '/']}
      livesLost={0}
    />
  );
};

export default TryAgain;