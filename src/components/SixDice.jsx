  import { useState } from 'react';
  import { Flex } from '@chakra-ui/react';
  import { motion } from 'framer-motion';
  import classes from './SixDice.module.css';
  import ButtonCustom from './UI/ButtonCustom';

  const Dice = ({ value }) => {
    const renderDots = () => {
      switch (value) {
        case 1:
          return <div className={classes.dot} />;
        case 2:
          return (
            <>
              <div
                className={`${classes.dot} ${classes.topLeft}`}
              />
              <div
                className={`${classes.dot} ${classes.bottomRight}`}
              />
            </>
          );
        case 3:
          return (
            <>
              <div
                className={`${classes.dot} ${classes.topLeft}`}
              />
              <div className={classes.dot} />
              <div
                className={`${classes.dot} ${classes.bottomRight}`}
              />
            </>
          );
        case 4:
          return (
            <>
              <div
                className={`${classes.dot} ${classes.topLeft}`}
              />
              <div
                className={`${classes.dot} ${classes.topRight}`}
              />
              <div
                className={`${classes.dot} ${classes.bottomLeft}`}
              />
              <div
                className={`${classes.dot} ${classes.bottomRight}`}
              />
            </>
          );
        case 5:
          return (
            <>
              <div
                className={`${classes.dot} ${classes.topLeft}`}
              />
              <div
                className={`${classes.dot} ${classes.topRight}`}
              />
              <div className={classes.dot} />
              <div
                className={`${classes.dot} ${classes.bottomLeft}`}
              />
              <div
                className={`${classes.dot} ${classes.bottomRight}`}
              />
            </>
          );
        case 6:
          return (
            <>
              <div
                className={`${classes.dot} ${classes.topLeft}`}
              />
              <div
                className={`${classes.dot} ${classes.topRight}`}
              />
              <div
                className={`${classes.dot} ${classes.midLeft}`}
              />
              <div
                className={`${classes.dot} ${classes.midRight}`}
              />
              <div
                className={`${classes.dot} ${classes.bottomLeft}`}
              />
              <div
                className={`${classes.dot} ${classes.bottomRight}`}
              />
            </>
          );
        default:
          return null;
      }
    };

    return <div className={classes.dice}>{renderDots()}</div>;
  };

  const SixDice = () => {
    const [diceValues, setDiceValues] = useState(Array(6).fill(1));
    const [total, setTotal] = useState(0);
    const [animateDice, setAnimateDice] = useState(false);

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
      const newDiceValues = diceValues.map(
        () => Math.floor(Math.random() * 6) + 1
      );
      setDiceValues(newDiceValues);
      setTotal(newDiceValues.reduce((acc, val) => acc + val, 0));
      setAnimateDice(true);
      setTimeout(() => setAnimateDice(false), 500);
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
          fontSize='20px'
          height={{ base: '55px', sm: '55px', md: '55', lg: '55px', xl: '55px' }}
          width={{ base: '130px', sm: '140px', md: '140px', lg: '140px', xl: '140px' }}/>
          {/* <Flex
            px='4px'
            borderRadius='5px'
            mt='2%'
            color='#704214'
            background={`linear-gradient(to bottom, rgba(255, 255, 204, 1), rgba(218, 165, 32, 0.6)), url(${Night})`}
            fontSize='20px'
          >
            Total Damage:<Flex color='#cc0000'>{total}</Flex>
          </Flex> */}
        </Flex>
      </motion.div>
    );
  };

  export default SixDice;