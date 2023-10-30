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

const playerData = chapter1JSON.player;
const enemyData = chapter1JSON.enemy;

const images = {
  Cassios,
  SeiyaNoCloth,
};

const imageStyle = {
  h: {
    base: '200px',
    sm: '260px',
    md: '280px',
    lg: '300px',
    xl: '300px',
  },
};

const addImageToCard = (card) => {
  const newCard = { ...card };
  newCard.background = `${card.background}, url(${StarryNight})`;
  newCard.image = images[card.image];
  return newCard;
};

const FightStage = ({ onStepChange }) => {
  const player = addImageToCard(playerData);
  const enemy = addImageToCard(enemyData);

  const { username } = useContext(AuthContext);
  const { heartCount, setHeartCount, resetHeartCount } =
    useContext(HeartContext);
  // const [charactersData, setCharactersData] = useState([]);
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
  const visible = useTimers(
    fightVisible,
    setFightVisible,
    starterSelectorVisible,
    setStarterSelectorVisible,
    gameNavbarVisible,
    setGameNavbarVisible
  );

  // useEffect(() => {
  //   const fetchCharactersData = async () => {
  //     let url = 'http://localhost:3000/chapters';
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setCharactersData(data);
  //   }
  //   fetchCharactersData();
  // }, []);

  // const player = addImageToCard(charactersData[0]?.player);
  // const enemy = addImageToCard(charactersData[0]?.enemy);

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
        onStepChange('game-over');
      } else {
        onStepChange('try-again');
      }
    }
    setPlayersRolled((prev) => prev + 1);
  };

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
        w={{
          base: '86.5%',
          sm: '89%',
          md: '88%',
          lg: '88%',
          xl: '88%',
        }}
        justifyContent='flex-end'
        alignItems='center'
      >
        <GameNavbar
          username={username}
          heartCount={heartCount}
          isVisible={gameNavbarVisible}
          livesLost={0}
          color='#111111'
        />
      </Flex>
      <motion.div
        variants={variants}
        initial='hidden'
        animate={visible.heading ? 'visible' : 'hidden'}
      >
        <Flex
          mt={{
            base: '25%',
            sm: '45%',
            md: '30%',
            lg: '25%',
            xl: '25%',
          }}
        >
          <Heading
            textAlign='center'
            fontFamily='ARCADECLASSIC'
            color='#111111'
            opacity='0.8'
          >
            Round {currentRound}
          </Heading>
        </Flex>
      </motion.div>

      <Flex
        mt={{
          base: '5%',
          sm: '5%',
          md: '4%',
          lg: '3%',
          xl: '3%',
        }}
        w='100%'
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
