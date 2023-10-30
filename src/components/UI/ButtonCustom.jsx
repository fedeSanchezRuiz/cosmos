import { motion } from 'framer-motion';
import { Button as ChakraButton } from '@chakra-ui/react';
import Night from '../../components/images/website-img/NightSkyBack.jpeg';

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
  whileHover: customWhileHover,
  whileTap: customWhileTap,
  isDisabled,
  opacity = 1,
}) => {
  const MotionButton = motion(ChakraButton);

  const defaultWhileHover = {
    scale: 1.05,
    opacity: 1,
  };

  const whileHover = customWhileHover
    ? { ...defaultWhileHover, ...customWhileHover }
    : defaultWhileHover;

  const defaultWhileTap = {
    scale: 0.9,
  };

  const whileTap = customWhileTap
    ? { ...defaultWhileTap, ...customWhileTap }
    : defaultWhileTap;

  return (
    <MotionButton
      onClick={onClick}
      whileHover={!isDisabled ? whileHover : {}}
      whileTap={!isDisabled ? whileTap : {}}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      opacity={opacity}
      isDisabled={isDisabled}
      _hover={{ filter: 'brightness(90%)', color: '#5a3517' }}
      style={{
        background: `linear-gradient(to bottom, rgba(255, 255, 204, 1), rgba(218, 165, 32, 0.6)), url(${Night})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        letterSpacing: '0.05rem',
      }}
      color='#704214'
      fontSize={
        fontSize ?? {
          base: '20px',
          sm: '21px',
          md: '22px',
          lg: '23px',
          xl: '24px',
        }
      }
      h={
        height ?? {
          base: '60px',
          sm: '62px',
          md: '66px',
          lg: '68px',
          xl: '70px',
        }
      }
      w={
        width ?? {
          base: '155px',
          sm: '158px',
          md: '164px',
          lg: '166px',
          xl: '170px',
        }
      }
    >
      {text}
    </MotionButton>
  );
};

export default ButtonCustom;
