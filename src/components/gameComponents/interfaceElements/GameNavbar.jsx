import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HeartIcon from './HeartIcon';

export default function GameNavbar({
  username,
  heartCount,
  isVisible,
  livesLost,
}) {
  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1.4, y: 0 }}
      >
        <Flex
          opacity='0.8'
          justifyContent='flex-end'
          h='25px'
          maxWidth='70%'
          margin='0 auto'
        >
          <Flex
            mr='2%'
            mt='1%'
            fontSize={{
              base: '20px',
              sm: '20px',
              md: '21px',
              lg: '22px',
              xl: '22px',
            }}
            justifyContent='center'
            alignItems='center'
            fontWeight='bold'
          >
            {username}
          </Flex>
          <Flex
            maxH='100%'
            justifyContent='flex-end'
            alignItems='center'
          >
            {Array.from({ length: heartCount }).map(
              (_, index) => (
                <Flex key={index}>
                  <motion.div
                    animate={{
                      opacity:
                        index < heartCount - livesLost ? 1 : 0,
                    }}
                    transition={{ duration: 2 }}
                  >
                    <HeartIcon size='22px' />
                  </motion.div>
                </Flex>
              )
            )}
          </Flex>
        </Flex>
      </motion.div>
    )
  );
};