import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HeartIcon from './HeartIcon';
import AuthContext from '../../../context/authContext';
import { useContext } from 'react';

export default function GameNavbar({
  heartCount,
  isVisible,
  livesLost,
  color,
}) {
  const { username } = useContext(AuthContext);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1.4, y: 0 }}
      >
        <Flex
          opacity='0.8'
          color={color}
          justifyContent='flex-end'
          alignItems='center'
          h='25px'
          minW={{
            base: '100px',
            sm: '130px',
            md: '152px',
            lg: '155px',
            xl: '160px',
          }}
          maxWidth='100%'
          mt='1%'
        >
          <Flex
            mr='2%'
            mt='1.5%'
            fontSize={{
              base: '20px',
              sm: '20px',
              md: '21px',
              lg: '22px',
              xl: '22px',
            }}
            justifyContent='center'
            alignItems='bottom'
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
}
