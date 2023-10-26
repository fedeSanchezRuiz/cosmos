import React from 'react';
import { motion } from 'framer-motion';
import { Flex, Image } from '@chakra-ui/react';

const CardFrame = ({
  name,
  image,
  hp,
  specialAttack,
  backgroundImage,
  fontColor,
  glow,
  onClick,
  ...props
}) => {
  const variants = {
    hidden: { opacity: 0, y: 30, scale: 1.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      initial={{
        filter: glow
          ? 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))'
          : 'none',
      }}
      animate={{
        filter: glow ? `drop-shadow(0 0 100px ${glow})` : 'none',
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
        duration: 0.8,
      }}
      onClick={onClick}
    >
      <Flex
        maxH='423.5px'
        w={{
          base: '187.5px',
          sm: '250px',
          md: '278px',
          lg: '293px',
          xl: '295px',
        }}
        // h={{ base: '320px', sm: '', md: '', lg: '', xl: '' }}
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        border='3px solid #111111'
        px='2px'
        borderRadius='20px'
        backgroundImage={backgroundImage}
        opacity='0.8'
        {...props}
      >
        <Flex
          justifyContent='center'
          w={{
            base: '180px',
            sm: '230px',
            md: '250px',
            lg: '260px',
            xl: '270px',
          }}
          mx='8px'
          letterSpacing={name.length > 12 ? '-2px' : '0'}
        >
          <motion.div
            variants={variants}
            initial='hidden'
            animate={props.visibleText ? 'visible' : 'hidden'}
          >
            <Flex
              minW={{
                base: '100px',
                sm: '145px',
                md: '150px',
                lg: '155px',
                xl: '165px',
              }}
              fontWeight='extrabold'
              color={fontColor}
              fontSize={{
                base: '21px',
                sm: '26.5px',
                md: '30px',
                lg: '31px',
                xl: '32px',
              }}
            >
              {name}
            </Flex>
          </motion.div>
          <motion.div
            variants={variants}
            initial='hidden'
            animate={props.visibleHp ? 'visible' : 'hidden'}
          >
            <Flex
              fontSize={{
                base: '21px',
                sm: '26.5px',
                md: '30px',
                lg: '31px',
                xl: '32px',
              }}
            >
              <Flex
                color={fontColor}
                ml='8px'
              >
                HP:
              </Flex>
              <Flex color={fontColor}>{hp}</Flex>
            </Flex>
          </motion.div>
        </Flex>
        <motion.div
          variants={variants}
          initial='hidden'
          animate={props.visibleImage ? 'visible' : 'hidden'}
        >
          <Image
            src={image}
            {...props.imageStyle}
          />
        </motion.div>
        <Flex>
          <motion.div
            variants={variants}
            initial='hidden'
            animate={
              props.visibleSpecialAttack ? 'visible' : 'hidden'
            }
          >
            <Flex
              justifyContent='center'
              textAlign='center'
              letterSpacing={
                specialAttack.length > 12 ? '-1px' : '0'
              }
              minW={{
                base: '165px',
                sm: '200px',
                md: '230px',
                lg: '245px',
                xl: '250px',
              }}
              fontSize={{
                base: '16px',
                sm: '21px',
                md: '23px',
                lg: '24px',
                xl: '25px',
              }}
              border='3px solid #111111'
              px='2px'
              borderRadius='25px'
              color={fontColor}
              lineHeight={{
                base: '3rem',
                sm: '3.5rem',
                md: '3.9rem',
                lg: '4.1rem',
                xl: '4.2rem',
              }}
            >
              <Flex
                letterSpacing='-2px'
                mr='10px'
              >
                Sp. Atk:
              </Flex>{' '}
              {specialAttack}
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default CardFrame;