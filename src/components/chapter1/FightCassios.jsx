import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flex, Heading } from '@chakra-ui/react';
import { useTimers } from './useTimers';
import GameNavbar from './GameNavbar';
import SixDice from '../SixDice';
import FightText from './FightText';
import CardBattle from './CardBattle';
import StarterSelector from './StarterSelector';
import coliseum from '../../images/Coliseum.webp';
import Seiya from '../../images/SeiyaFirst.jpeg';
import Cassios from '../../images/Cassios1.jpeg';
import StarryBack from '../../images/StarryBack.jpeg';

const FightCassios = () => {
  const imageStyle = {
    h: {
      base: '200px',
      sm: '260px',
      md: '280px',
      lg: '300px',
      xl: '300px',
    },
  };

  const [fightVisible, setFightVisible] = useState(false);
  const [starterSelectorVisible, setStarterSelectorVisible] = useState(false);
  const [gameNavbarVisible, setGameNavbarVisible] = useState(false);
  const visible = useTimers(
    fightVisible,
    setFightVisible,
    starterSelectorVisible,
    setStarterSelectorVisible,
    gameNavbarVisible,
    setGameNavbarVisible,
  );

  const variants = {
    hidden: { opacity: 0, y: 30, scale: 1.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const seiya = {
    name: 'Seiya',
    life: 45,
    color: '#D72638',
    image: Seiya,
    attack: 'Meteor Fist',
  };

  const cassios = {
    name: 'Cassios',
    life: 40,
    color: '#1A0D05',
    image: Cassios,
    attack: 'Crushing Fist',
  };

  return (
    <Flex
      height='100vh'
      maxWidth='768px'
      margin='0 auto'
      backgroundImage={`linear-gradient(to bottom, rgba(96, 128, 159, 0.2), rgba(136, 178, 209, 0.4)), url(${coliseum})`}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      flexDir='column'
      alignItems='center'
    >
      <FightText
        isVisible={fightVisible}
        setIsVisible={setFightVisible}
      />
      <StarterSelector
        charA='Seiya'
        charB='Cassios'
        oddsA={0.6}
        oddsB={0.4}
        isVisible={starterSelectorVisible}
        setIsVisible={setStarterSelectorVisible}
      />
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
        lineHeight={{
          base: '3rem',
          sm: '3.5rem',
          md: '4.2rem',
          lg: '4.5rem',
          xl: '4.5rem',
        }}
      >
        <GameNavbar 
        username='Player 1'
        isVisible={gameNavbarVisible} 
        setIsVisible={setGameNavbarVisible}
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
            Round 1
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
            animate={visible.cardA ? 'visible' : 'hidden'}
          >
            <CardBattle
              name={seiya.name}
              image={seiya.image}
              fontColor={seiya.color}
              hp={seiya.life}
              specialAttack={seiya.attack}
              backgroundImage={`linear-gradient(to top, rgba(173, 216, 230, 0.6), rgba(102, 153, 204, 0.6), rgba(0, 115, 230, 0.6)), url(${StarryBack})`}
              visibleText={visible.characterAText}
              visibleHp={visible.hpText}
              visibleImage={visible.characterA}
              visibleSpecialAttack={visible.spAtk}
              imageStyle={imageStyle}
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial='hidden'
            animate={visible.cardB ? 'visible' : 'hidden'}
          >
            <CardBattle
              name={cassios.name}
              image={cassios.image}
              fontColor={cassios.color}
              hp={cassios.life}
              specialAttack={cassios.attack}
              backgroundImage={`linear-gradient(to bottom, rgba(92, 64, 51, 0.6), rgba(140, 112, 75, 0.6), rgba(191, 160, 114, 0.6)), url(${StarryBack})`}
              visibleText={visible.characterBText}
              visibleHp={visible.hpText}
              visibleImage={visible.characterB}
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
          <SixDice />
        </motion.div>
        <motion.div
          variants={variants}
          initial='hidden'
          animate={visible.dice ? 'visible' : 'hidden'}
        >
          <SixDice />
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default FightCassios;