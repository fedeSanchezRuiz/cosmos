import { motion } from "framer-motion";
import { Button as ChakraButton } from '@chakra-ui/react';
import classes from './ButtonCustom.module.css';
import Night from '../../images/NightSkyBack.jpeg';

const ButtonCustom = ({ 
  text, 
  onClick, 
  height, 
  width, 
  fontSize,
  initial,
  exit,
  animate,
  transition,
  whileHover,
  whileTap,
}) => {

  const MotionButton = motion(ChakraButton);

  return (
    <MotionButton
      whileHover={whileHover}
      whileTap={whileTap}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      className={classes.buttonStyle}
      style={{
        background: `linear-gradient(to bottom, rgba(255, 255, 204, 1), rgba(218, 165, 32, 0.6)), url(${Night})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      color='#704214'
      fontSize={fontSize ?? {
        base: '20px',
        sm: '21px',
        md: '22px',
        lg: '23px',
        xl: '24px',
      }}
      h={height ?? {
        base: '60px',
        sm: '62px',
        md: '66px',
        lg: '68px',
        xl: '70px',
      }}
      w={width ?? {
        base: '155px',
        sm: '158px',
        md: '164px',
        lg: '166px',
        xl: '170px',
      }}
      onClick={onClick}
    >
      {text}
    </MotionButton>
  )
};

export default ButtonCustom;