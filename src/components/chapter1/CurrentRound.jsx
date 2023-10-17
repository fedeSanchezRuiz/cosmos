import { useState, useEffect } from 'react';

const CurrentRound = ({ 
  starter, 
  charA, 
  charB, 
  charALife: initialCharALife, 
  charBLife: initialCharBLife, 
  handleRoll 
}) => {
  const [currentTurn, setCurrentTurn] = useState(starter);
  const [characterALife, setCharacterALife] = useState(initialCharALife);
  const [characterBLife, setCharacterBLife] = useState(initialCharBLife);
  const [currentRound, setCurrentRound] = useState(1);

  const handleCharacterARoll = (number) => {
    if (number === currentRound) {
      setCharacterBLife(characterBLife - number);
    }

    if (characterBLife - number > 0 && characterALife > 0) {
      setCurrentRound(currentRound + 1);
    }
    setCurrentTurn(charB);
  };

  const handleCharacterBRoll = (number) => {
    if (number === currentRound) {
      setCharacterALife(characterALife - number);
    }
    if (characterALife - number > 0 && characterBLife > 0) {
      setCurrentRound(currentRound + 1);
    }
    setCurrentTurn(charA);
  };

  useEffect(() => {
    handleRoll(currentTurn === charA ? handleCharacterARoll : handleCharacterBRoll);
  }, [currentTurn, handleRoll]);

  return (
    <div>
      <p>{charA} life: {characterALife}</p>
      <p>{charB} life: {characterBLife}</p>
    </div>
  );
};

export default CurrentRound;