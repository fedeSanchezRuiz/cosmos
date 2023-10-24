import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import classes from './SixDice.module.css';
import ButtonCustom from './UI/ButtonCustom';
import DiceDots from './DiceDots';

const Dice = ({ value, isRollComplete }) => {
  return (
    <div className={`${classes.dice} ${isRollComplete ? classes.disabledDice : ''}`}>
      <DiceDots value={value} />
    </div>
  );
};

const SixDice = ({ starterSelected, delay, onDiceRolled, isRollComplete }) => {
  const [diceValues, setDiceValues] = useState(Array(6).fill(1));
  const [total, setTotal] = useState(0);
  const [animateDice, setAnimateDice] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (starterSelected === true) {
        setDiceValues(Array(6).fill(1));
      }
    }, delay);

    return () => clearTimeout(timer);

  }, [starterSelected, delay]);

  const diceVariants = {
    initial: { scale: 0, x: 0 },
    animate: {
      x: [-10, 10],
      scale: 1.05,
      transition: {
        type: 'spring',
        bounce: 0.8,
      },
    },
    rest: { scale: 1, transition: { duration: 0.15 } },
  };

  const rollDice = () => {
    if (isRollComplete) return;

    const newDiceValues = diceValues.map(
      () => Math.floor(Math.random() * 6) + 1
    );
    setDiceValues(newDiceValues);
    setTotal(newDiceValues.reduce((acc, val) => acc + val, 0));
    setAnimateDice(true);
    setTimeout(() => setAnimateDice(false), 500);
    onDiceRolled(newDiceValues.reduce((acc, val) => acc + val, 0), newDiceValues);
  };

  return (
    <motion.div
      variants={diceVariants}
      initial='initial'
      animate={animateDice ? 'animate' : 'rest'}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex' }}>
          {diceValues.slice(0, 3).map((value, index) => (
            <Dice
              key={index}
              value={value}
            />
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          {diceValues.slice(3, 6).map((value, index) => (
            <Dice
              key={index + 3}
              value={value}
            />
          ))}
        </div>
      </div>
      <Flex
        fontSize={{
          base: '17px',
          sm: '18px',
          md: '19px',
          lg: '20px',
          xl: '22px',
        }}
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        color='black'
        pt='2%'
      >
        <ButtonCustom
        text={'Fight!'}
        onClick={rollDice}
        whileHover={{ scale: 1.05, opacity: 0.8 }}
        whileTap={{ scale: 0.9 }}
        fontSize='20px'
        height={{ base: '55px', sm: '55px', md: '55', lg: '55px', xl: '55px' }}
        width={{ base: '130px', sm: '140px', md: '140px', lg: '140px', xl: '140px' }}
        isDisabled={isRollComplete}
        />
      </Flex>
    </motion.div>
  );
};

export default SixDice;