import { Flex, Heading, Image } from '@chakra-ui/react';
import ariesMu from '../images/AriesMu.png';
import papyrus from '../images/PapyrusBack.jpeg';
import classes from './About.module.css';

const About = () => {
  const firstPapyrus = (
    <Flex
      className={`${classes.papyrusBox} ${classes.outerFlex}`}
      style={{
        background: `linear-gradient(to top, rgba(199, 157, 115, 0.8), rgba(163, 126, 83, 0.94)), url(${papyrus})`,
      }}
    >
      <Heading
        className={classes.heading}
        fontFamily='papyrus'
      >
        Saint Seiya
      </Heading>
      <Flex className={classes.innerFlex}>
        Saint Seiya is a manga and anime originally created by
        Masami Kurumada in 1985. The plot of the story centers
        around a group of young warriors known as Saints that
        fight alongside the Greek Goddess Athena to protect
        humanity against the forces of evil.
      </Flex>
    </Flex>
  );

  const secondPapyrus = (
    <Flex
      style={{
        background: `linear-gradient(to top, rgba(199, 157, 115, 0.8), rgba(163, 126, 83, 0.9)), url(${papyrus})`,
      }}
      className={`${classes.papyrusBox} ${classes.outerFlex}`}
    >
      <Heading
        className={classes.heading}
        fontFamily='papyrus'
      >
        Cosmos Warriors
      </Heading>
      <Flex className={classes.innerFlex}>
        Cosmos Warriors is a Saint Seiya demo website created by
        me, Federico Sánchez, with the purpose of putting into
        practice many of the React concepts that I have learnt so
        far about the world of web development.
      </Flex>
    </Flex>
  );

  const MuExplain = (
    <Image
      display={{
        base: 'none',
        md: 'none',
        lg: 'block',
        xl: 'block',
      }}
      maxW='80%'
      src={ariesMu}
    />
  );

  return (
    <Flex
      className={classes.totalFlex}
      mx={{ base: '2%', sm: '2%', md: '6%', lg: '8%', xl: '14%' }}
      flexDir={{ base: 'column', sm: 'column', md: 'row' }}
      flexWrap={{ base: 'wrap', lg: 'nowrap' }}
    >
      {MuExplain}
      <Flex flexDir={{ base: 'column', sm: 'row', md: 'row' }}>
        {firstPapyrus}
        {secondPapyrus}
      </Flex>
    </Flex>
  );
};

export default About;