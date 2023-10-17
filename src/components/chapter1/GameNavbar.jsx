import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import HeartIcon from './HeartIcon';

export default function GameNavbar({
  username,
  isVisible,
  setIsVisible,
}) {
  let heartCount = 3;

  useEffect(() => {
    setIsVisible(true);
  }, [isVisible, setIsVisible]);

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
                  <HeartIcon size='22px' />
                </Flex>
              )
            )}
          </Flex>
        </Flex>
      </motion.div>
    )
  );
};