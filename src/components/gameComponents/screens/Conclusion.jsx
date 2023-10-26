import Congratulations from './Congratulations';
import TryAgain from './TryAgain';
import GameOver from './GameOver';

const Conclusion = ({ gameSteps, onTryAgain, onExit, onRestart }) => {
  return (
    <>
      {gameSteps === 'conclusion-congratulations' && (
        <Congratulations />
      )}
      {gameSteps === 'conclusion-try-again' && (
        <TryAgain onTryAgain={onTryAgain} onExit={onExit} />
      )}
      {gameSteps === 'conclusion-game-over' && (
        <GameOver onRestart={onRestart} onExit={onExit} />
      )}
    </>
  );
};

export default Conclusion;