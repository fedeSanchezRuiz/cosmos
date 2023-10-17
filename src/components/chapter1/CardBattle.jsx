import React from 'react';
import { motion } from 'framer-motion';
import { Flex, Image } from '@chakra-ui/react';

const CardBattle = ({ name, image, hp, specialAttack, backgroundImage, fontColor, ...props }) => {
  const variants = {
    hidden: { opacity: 0, y: 30, scale: 1.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <Flex
      flexDir='column'
      alignItems='center'
      border='3px solid'
      px='2px'
      borderRadius='20px'
      backgroundImage={backgroundImage}
      opacity='0.8'
      {...props}
    >
      <Flex ml='8px'>
        <motion.div
          variants={variants}
          initial='hidden'
          animate={props.visibleText ? 'visible' : 'hidden'}
        >
          <Flex
            minW={{ base: '100px', sm: '150px', md: '150px', lg: '150px', xl: '150px' }}
            fontWeight='extrabold'
            color={fontColor}
            fontSize={{
              base: '20px',
              sm: '28px',
              md: '32px',
              lg: '33px',
              xl: '35px',
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
            mr='8px'
            fontSize={{
              base: '15px',
              sm: '22px',
              md: '32px',
              lg: '33px',
              xl: '35px',
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
          animate={props.visibleSpecialAttack ? 'visible' : 'hidden'}
        >
          <Flex
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
          >
            Sp. Atk: {specialAttack}
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default CardBattle;