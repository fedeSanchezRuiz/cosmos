import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NavbarLogo } from '../../UI/navbar/NavbarLogo';
import ButtonCustom from '../../UI/ButtonCustom';
import ScreenCard from '../interfaceElements/ScreenCard';
import SanctuaryClockBackground from '../../images/chapter1-img/Clock1.jpeg';
import NightSkyBackground from '../../images/website-img/Total-Black1.jpg';

const MainScreen = ({ onStepChange }) => {

  const [isDarkening, setIsDarkening] = useState(false);

  const activateDarkHandler = () => {
    setIsDarkening(true);

    setTimeout(() => {
      onStepChange('/chapter1');
    }, 1500);
  };

  return (
    <>
      <ScreenCard
        backgroundImage={SanctuaryClockBackground}
        justifyContent='flex-end'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isDarkening ? 1 : 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            width: '100%',
            maxWidth: '768px',
            height: '100%',
            backgroundImage: `linear-gradient(to bottom, rgba(96, 128, 159, 0.1), rgba(136, 178, 209, 0.3)), url(${NightSkyBackground})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></motion.div>

        <Flex
          flexDir='column'
          pb={{
            base: '32%',
            sm: '21%',
            md: '18%',
            lg: '16%',
            xl: '15%',
          }}
        >
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: isDarkening ? 0 : 1,
              y: isDarkening ? -300 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              y: { duration: 0.5, delay: 0.1 },
              opacity: { duration: 0.4, delay: 0.1 },
            }}
          >
            <NavbarLogo
              logoSSHeight={{
                base: '56px',
                sm: '57px',
                md: '58px',
                lg: '59px',
                xl: '60px',
              }}
              logoHeight={{
                base: '26px',
                sm: '26.5px',
                md: '27px',
                lg: '27.5px',
                xl: '28px',
              }}
              disableLink={true}
            />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: '1.5',
            }}
          >
            <ButtonCustom
              onClick={activateDarkHandler}
              _hover={{
                background: 'rgba(255, 255, 204, 0.8)',
              }}
              text={'Start'}
              initial={{ opacity: 1, y: 0 }}
              animate={{
                opacity: isDarkening ? 0 : 1,
                y: isDarkening ? -300 : 0,
                delay: 0.5,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                y: { duration: 0.5, delay: 0.3 },
                opacity: { duration: 0.4, delay: 0.1 },
              }}
            />
          </motion.div>
        </Flex>
      </ScreenCard>
      <Outlet isDarkening={isDarkening} />
    </>
  );
};

export default MainScreen;