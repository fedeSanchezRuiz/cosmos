import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flex, Heading } from '@chakra-ui/react';
import { useTimers } from '../../hooks/useTimers';
import AuthContext from '../../../context/authContext';
import HeartContext from '../../../context/heartContext';
import GameNavbar from '../interfaceElements/GameNavbar';
import SixDice from '../dice/SixDice';
import ScreenCard from '../interfaceElements/ScreenCard';
import FlashMessage from '../interfaceElements/FlashMessage';
import CardFrame from '../cardDesigns/CardFrame';
import StarterSelector from '../interfaceElements/StarterSelector';
import ColiseumBackground from '../../images/chapter1-img/Coliseum.webp';
import SeiyaNoCloth from '../../images/chapter1-img/SeiyaFirst.jpeg';
import Cassios from '../../images/chapter1-img/Cassios1.jpeg';
import StarryNight from '../../images/website-img/StarryBack.jpeg';
import chapter1JSON from '../../../json/chapter1.json';

const images = {
  Cassios,
  SeiyaNoCloth,
};

const FightStage = ({ onStepChange }) => {
  const playerData = chapter1JSON.player;
  const enemyData = chapter1JSON.enemy;

  const addImagesToObject = (obj) => {
    const newObject = { ...obj };
    newObject.background = `${obj.background}, url(${StarryNight})`;
    newObject.image = images[obj.image];
    return newObject;
  };

  const [player, setPlayer] = useState(
    addImagesToObject(playerData)
  );
  const [enemy, setEnemy] = useState(
    addImagesToObject(enemyData)
  );

  const imageStyle = {
    h: {
      base: '200px',
      sm: '260px',
      md: '280px',
      lg: '300px',
      xl: '300px',
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 30, scale: 1.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const playerSpecialAttack = (
    <Flex
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      color={player.color}
    >
      <Heading
        fontFamily='ARCADECLASSIC'
        fontSize='28px'
      >
        Special Attack:
      </Heading>
      <Heading
        fontFamily='ARCADECLASSIC'
        fontWeight='bold'
        fontSize='32px'
      >
        {player.attack}
      </Heading>
    </Flex>
  );

  const enemySpecialAttack = (
    <Flex
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      color={enemy.color}
    >
      <Heading
        fontFamily='ARCADECLASSIC'
        fontSize='28px'
      >
        Special Attack:
      </Heading>
      <Heading
        fontFamily='ARCADECLASSIC'
        fontWeight='bold'
        fontSize='32px'
      >
        {enemy.attack}
      </Heading>
    </Flex>
  );

  const handlePlayerSpecialAttack = () => {
    setPlayerSpecialVisible(true);
  };

  const handleEnemySpecialAttack = () => {
    setEnemySpecialVisible(true);
  };

  const onDiceRolledByPlayer = (total, diceValues) => {
    setIsPlayerRollComplete(true);
    setIsEnemyRollComplete(false);
    const roundMod = ((currentRound - 1) % 6) + 1;
    let damage =
      diceValues.filter((dice) => dice === roundMod).length *
      roundMod;

    // Seiya special attack logic
    if (player.round % 6 === currentRound % 6) {
      handlePlayerSpecialAttack();
      if (player.round % 2 === 1) {
        // odd round
        const oddDiceCount = diceValues.filter(
          (dice) => dice % 2 === 1
        ).length;
        if (oddDiceCount >= 3) {
          damage += player.extraDamage;
        }
      } else {
        // even round
        const evenDiceCount = diceValues.filter(
          (dice) => dice % 2 === 0
        ).length;
        if (evenDiceCount >= 3) {
          damage += player.extraDamage;
        }
      }
    }

    if (damage === 0) {
      setTimeout(() => {
        setMissedAttackVisible(true);
      }, 200);
    }

    setTimeout(() => {
      setTotalDamage(damage);
    }, 300);
    setEnemyLife((prevLife) => Math.max(prevLife - damage, 0));
    if (enemyLife - damage <= 0) {
      setTimeout(() => {
        // navigate('/chapter1/congratulations');
        onStepChange('congratulations');
        resetHeartCount();
      }, 50);
    }
    setPlayersRolled((prev) => prev + 1);
  };

  const onDiceRolledByEnemy = (total, diceValues) => {
    setIsEnemyRollComplete(true);
    setIsPlayerRollComplete(false);
    const roundMod = ((currentRound - 1) % 6) + 1;
    let damage =
      diceValues.filter((dice) => dice === roundMod).length *
      roundMod;

    // Cassios special attack logic
    if (enemy.round % 6 === currentRound % 6) {
      handleEnemySpecialAttack();
      if (enemy.round % 2 === 1) {
        // odd round
        const oddDiceCount = diceValues.filter(
          (dice) => dice % 2 === 1
        ).length;
        if (oddDiceCount >= 3) {
          damage += enemy.extraDamage;
        }
      } else {
        // even round
        const evenDiceCount = diceValues.filter(
          (dice) => dice % 2 === 0
        ).length;
        if (evenDiceCount >= 3) {
          damage += enemy.extraDamage;
        }
      }
    }

    if (damage === 0) {
      setTimeout(() => {
        setMissedAttackVisible(true);
      }, 300);
    }

    setTimeout(() => {
      setTotalDamage(damage);
    }, 200);
    setPlayerLife((prevLife) => Math.max(prevLife - damage, 0));
    if (PlayerLife - damage <= 0) {
      setHeartCount((prevHeartCount) => prevHeartCount - 1);
      if (heartCount <= 1) {
        // navigate('/chapter1/game-over');
        onStepChange('game-over');
      } else {
        // navigate('/chapter1/try-again');
        onStepChange('try-again');
      }
    }
    setPlayersRolled((prev) => prev + 1);
  };

  const { username } = useContext(AuthContext);
  const [fightVisible, setFightVisible] = useState(false);
  const [starterSelectorVisible, setStarterSelectorVisible] =
    useState(false);
  const [gameNavbarVisible, setGameNavbarVisible] =
    useState(false);
  const [starter, setStarter] = useState('');
  const [isPlayerRollComplete, setIsPlayerRollComplete] =
    useState(false);
  const [isEnemyRollComplete, setIsEnemyRollComplete] =
    useState(false);
  const [PlayerLife, setPlayerLife] = useState(player.life);
  const [enemyLife, setEnemyLife] = useState(enemy.life);
  const [currentRound, setCurrentRound] = useState(1);
  const [playersRolled, setPlayersRolled] = useState(0);
  const [playerSpecialVisible, setPlayerSpecialVisible] =
    useState(false);
  const [enemySpecialVisible, setEnemySpecialVisible] =
    useState(false);
  const [missedAttackVisible, setMissedAttackVisible] =
    useState(false);
  const [totalDamage, setTotalDamage] = useState(0);
  const { heartCount, setHeartCount, resetHeartCount } =
    useContext(HeartContext);
  const visible = useTimers(
    fightVisible,
    setFightVisible,
    starterSelectorVisible,
    setStarterSelectorVisible,
    gameNavbarVisible,
    setGameNavbarVisible
  );

  useEffect(() => {
    if (playersRolled === 2) {
      setCurrentRound((prevRound) => prevRound + 1);
      setPlayersRolled(0);
    }
  }, [playersRolled]);

  useEffect(() => {
    if (starter === player.name) {
      setIsPlayerRollComplete(false);
      setIsEnemyRollComplete(true);
    } else {
      setIsEnemyRollComplete(false);
      setIsPlayerRollComplete(true);
    }
  }, [starter, player.name]);

  return (
    <ScreenCard
      backgroundImage={ColiseumBackground}
      justifyContent='top'
    >
      <AnimatePresence>
        <FlashMessage
          key='fight-text'
          fontSize='90px'
          text='Fight!'
          duration={500}
          isVisible={fightVisible}
          setIsVisible={setFightVisible}
        />
        <StarterSelector
          key='starter-selector'
          player={player.name}
          enemy={enemy.name}
          playerOdds={0.6}
          enemyOdds={0.4}
          isVisible={starterSelectorVisible}
          setIsVisible={setStarterSelectorVisible}
          setStarter={setStarter}
        />
        <FlashMessage
          key='player-special'
          fontSize='30px'
          text={playerSpecialAttack}
          duration={1400}
          isVisible={playerSpecialVisible}
          setIsVisible={setPlayerSpecialVisible}
        />
        <FlashMessage
          key='enemy-special'
          fontSize='30px'
          text={enemySpecialAttack}
          duration={1400}
          isVisible={enemySpecialVisible}
          setIsVisible={setEnemySpecialVisible}
        />
        <FlashMessage
          key='total-damage'
          fontSize='30px'
          text={`${totalDamage} damage!`}
          duration={1200}
          isVisible={totalDamage > 0}
          setIsVisible={setTotalDamage}
          style={{ top: '20%' }}
        />
        <FlashMessage
          key='attack-missed'
          fontSize='30px'
          text='Attack Missed!'
          duration={1200}
          isVisible={missedAttackVisible}
          setIsVisible={setMissedAttackVisible}
          style={{ top: '20%' }}
        />
      </AnimatePresence>
      <Flex
        h='60%'
        width='100%'
        color='#222222'
        flexDir='column'
        fontSize={{
          base: '22px',
          sm: '31px',
          md: '33px',
          lg: '33.5px',
          xl: '34px',
        }}
      >
        <GameNavbar
          username={username}
          heartCount={heartCount}
          isVisible={gameNavbarVisible}
          livesLost={0}
        />
        <motion.div
          variants={variants}
          initial='hidden'
          animate={visible.heading ? 'visible' : 'hidden'}
        >
          <Heading
            textAlign='center'
            fontFamily='ARCADECLASSIC'
          >
            Round {currentRound}
          </Heading>
        </motion.div>

        <Flex
          maxHeight='100%'
          maxWidth='768px'
          justifyContent={{
            base: 'space-between',
            sm: 'space-around',
            md: 'space-around',
            lg: 'space-around',
            xl: 'space-around',
          }}
          alignItems='center'
          wrap='wrap'
        >
          <motion.div
            variants={variants}
            initial='hidden'
            animate={visible.playerCard ? 'visible' : 'hidden'}
          >
            <CardFrame
              name={player.name}
              image={player.image}
              fontColor={player.color}
              hp={PlayerLife}
              specialAttack={player.attack}
              backgroundImage={player.background}
              visibleText={visible.playerText}
              visibleHp={visible.hpText}
              visibleImage={visible.playerImage}
              visibleSpecialAttack={visible.spAtk}
              imageStyle={imageStyle}
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial='hidden'
            animate={visible.enemyCard ? 'visible' : 'hidden'}
          >
            <CardFrame
              name={enemy.name}
              image={enemy.image}
              fontColor={enemy.color}
              hp={enemyLife}
              specialAttack={enemy.attack}
              backgroundImage={enemy.background}
              visibleText={visible.enemyText}
              visibleHp={visible.hpText}
              visibleImage={visible.enemyImage}
              visibleSpecialAttack={visible.spAtk}
              imageStyle={imageStyle}
            />
          </motion.div>
        </Flex>
      </Flex>
      <Flex
        mt={{
          base: '-2%',
          sm: '3%',
          md: '3%',
          lg: '5%',
          xl: '5%',
        }}
        justifyContent='space-between'
        w={{
          base: '90%',
          sm: '75%',
          md: '75%',
          lg: '75%',
          xl: '75%',
        }}
        maxWidth='768px'
      >
        <motion.div
          variants={variants}
          initial='hidden'
          animate={visible.dice ? 'visible' : 'hidden'}
        >
          <SixDice
            playerName={player.name}
            delay={3600}
            starterSelected={starter === player.name}
            onDiceRolled={(total, diceValues) =>
              onDiceRolledByPlayer(total, diceValues)
            }
            isRollComplete={isPlayerRollComplete}
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial='hidden'
          animate={visible.dice ? 'visible' : 'hidden'}
        >
          <SixDice
            enemyName={enemy.name}
            delay={3600}
            starterSelected={starter === enemy.name}
            onDiceRolled={(total, diceValues) =>
              onDiceRolledByEnemy(total, diceValues)
            }
            isRollComplete={isEnemyRollComplete}
          />
        </motion.div>
      </Flex>
    </ScreenCard>
  );
};

export default FightStage;
