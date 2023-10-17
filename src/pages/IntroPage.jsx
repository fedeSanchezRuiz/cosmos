import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NavbarLogo } from '../components/UI/navbar/NavbarLogo';
import ButtonCustom from '../components/UI/ButtonCustom';
import SanctuaryClock from '../images/Clock1.jpeg';
import TotalBlack from '../images/Total-Black1.jpg';

const IntroPage = () => {
  const navigate = useNavigate();

  const [isDarkening, setIsDarkening] = useState(false);

  const activateDarkHandler = () => {
    setIsDarkening(true);

    setTimeout(() => {
      navigate('/chapter1');
    }, 1500);
  };

  return (
    <>
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100vh',
          maxWidth: '768px',
          margin: '0 auto',
          backgroundImage: `linear-gradient(to bottom, rgba(96, 128, 159, 0.1), rgba(136, 178, 209, 0.3)), url(${SanctuaryClock})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
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
            backgroundImage: `linear-gradient(to bottom, rgba(96, 128, 159, 0.1), rgba(136, 178, 209, 0.3)), url(${TotalBlack})`,
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
            transition={{ delay: 0.2, duration: 0.6 }}
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
          <ButtonCustom
            whileHover={{ scale: 1.05, opacity: 0.6 }}
            whileTap={{ scale: 0.9 }}
            onClick={activateDarkHandler}
            text={'Start'}
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: isDarkening ? 0 : 1,
              y: isDarkening ? -300 : 0,
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            // exit={{ opacity: 0, y: -300, scale: 0 }}
          />
        </Flex>
      </motion.div>
      <Outlet isDarkening={isDarkening} />
    </>
  );
};

export default IntroPage;
