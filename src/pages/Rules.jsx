import { Flex, Heading, Image } from '@chakra-ui/react';
import classes from './Rules.module.css';
import AriesMu from '../components/images/website-img/AriesMu.png'
import Scroll from '../../src/components/images/website-img/ScrollPaperB.webp';

const Rules = () => {
  const muExplain = (
    <Image
      maxH='550px'
      display={{
        base: 'none',
        sm: 'none',
        md: 'block',
        lg: 'block',
        xl: 'block',
      }}
      src={AriesMu}
    />
  );

  const muExplanation = (
    <Flex
      width={{ base: '0%', sm: '0%', md: '50%' }}
      justifyContent='center'
      alignItems='center'
    >
      {muExplain}
    </Flex>
  );

  const stoneBoxes = (
    <Flex
      className={`${classes.stoneBox} ${classes.outerFlex}`}
      fontSize={{
        base: '20px',
        sm: '22px',
        md: '22px',
        lg: '23px',
        xl: '25px',
      }}
      style={{
        backgroundImage: `url(${Scroll})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(90%)',
      }}
    >
      <Flex
        pt='5%'
        className={classes.innerFlex}
        maxH='550px'
        overflowY='auto'
        direction='column'
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 80%)',
          WebkitMaskImage:
            'linear-gradient(to top, transparent 14%, black 25%, black 75%, transparent 85%)',
        }}
      >
        <Flex
          flexDir='column'
          maxH='400px'
          my='10%'
          pt={{
            base: '20%',
            sm: '8%',
            md: '14%',
            lg: '11%',
            xl: '10%',
          }}
          px={{
            base: '7%',
            sm: '20%',
            md: '12%',
            lg: '17%',
            xl: '20%',
          }}
        >
          <Heading
            className={classes.heading}
            fontFamily='papyrus'
            fontSize={{
              base: '32px',
              sm: '38px',
              md: '40px',
              lg: '42px',
              xl: '46px',
            }}
          >
            Game Rules
          </Heading>
          <Flex pb='35%'>
            <ul>
              <li>
                Cosmos Warriors is a solo dice game divided by
                rounds.
              </li>
              <li>
                Each character will roll 6 dice in each round.
              </li>
              <li>
                The round finishes once both characters have
                rolled their dice.
              </li>
              <li>
                Damage calculation depends on the current round.
                For example, if it is round 1, and of your 6
                dice, 3 are 1s, total damage is 3. The other dice
                values are discarded. If you get no number
                matching the round, damage in that round is 0.
              </li>
              <li>
                If you reach the seventh round and beyond, the
                dice count resets. For example, round 7 is
                equivalent to round 1, so only 1s will be
                counted as damage. Round 8 is equivalent to round
                2 and so on.
              </li>
              <li>
                Each character has a special attack that will be
                automatically triggered in the corresponding
                round. If the condition is met, extra damage will
                be inflicted.
              </li>
              <li>
                The battle will end once one of the characters'
                life runs out.
              </li>
            </ul>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );

  return (
    <Flex
      minH='72vh'
      flexDir='row'
      alignItems='center'
      mx={{
        base: '2%',
        sm: '2%',
        md: '4%',
        lg: '10%',
        xl: '15%',
      }}
      mt={{
        base: '22%',
        sm: '16%',
        md: '12%',
        lg: '10%',
        xl: '7%',
      }}
      mb={{ base: '0%', sm: '2%', md: '3%', lg: '2%', xl: '2%' }}
      wrap='wrap'
    >
      {muExplanation}
      {stoneBoxes}
    </Flex>
  );
};

export default Rules;
