import { Flex } from '@chakra-ui/react';
import classes from './CardWrapper.module.css';

const Cardwrapper = (props) => {
  return (
    <Flex
      className={classes.cardStyle}
      mx={{ base: '5%', sm: '6%', md: '8%' }}
      mt={{
        base: '15%',
        sm: '12%',
        md: '8%',
        lg: '6%',
        xl: '4%',
      }}
    >
      {props.children}
    </Flex>
  );
};

export default Cardwrapper;
