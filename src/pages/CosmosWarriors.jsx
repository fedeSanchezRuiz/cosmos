import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainScreen from './MainScreen';
import Introduction from '../components/gameComponents/screens/Introduction';
import FightStage from '../components/gameComponents/screens/FightStage';
import Conclusion from '../components/gameComponents/screens/Conclusion';

const CosmosWarriors = () => {
  const [gameSteps, setGameSteps] = useState('main-screen');
  const navigate = useNavigate();

  const onExit = () => {
    navigate('/');
  };

  return (
    <>
      {(gameSteps === 'main-screen' && (
        <MainScreen onStepChange={() => setGameSteps('introduction')} />
      )) ||
      (gameSteps === 'introduction' && (
        <Introduction onStepChange={() => setGameSteps('fight')} />
      )) ||
      (gameSteps === 'fight' && (
        <FightStage onStepChange={(outcome) => setGameSteps(`conclusion-${outcome}`)} />
      )) ||
      (gameSteps.startsWith('conclusion-') && (
        <Conclusion
        gameSteps={gameSteps}
        onTryAgain={() => setGameSteps('fight')}
        onExit={onExit}
        onRestart={() => setGameSteps('main-screen')}
        />
      ))
      }
    </>
  )
};

export default CosmosWarriors;