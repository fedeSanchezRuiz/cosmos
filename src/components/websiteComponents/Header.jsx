import { Box, Flex, Heading } from '@chakra-ui/react';
import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../UI/LoginModal';
import ButtonCustom from '../UI/ButtonCustom';
import AuthContext from '../../context/authContext';

export const Header = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const { isLoggedIn, username } = context;
  const isLoggedInPrev = useRef(isLoggedIn);

  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (!isLoggedIn && isLoggedInPrev.current) {
      setShowLoginModal(false);
    }
    isLoggedInPrev.current = isLoggedIn;
  }, [isLoggedIn]);

  const playNowHandler = () => {
    if (isLoggedIn) {
      navigate('/play-game');
    } else {
      setShowLoginModal(true);
    }
  };

  const closeLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  const headerContent = (
    <Box textAlign='center'>
      <Heading
        fontFamily='ARCADECLASSIC'
        letterSpacing='0.1rem'
        fontSize={{
          base: '44px',
          sm: '48px',
          md: '55px',
          lg: '60px',
          xl: '70px',
        }}
      >
        Burn your Cosmos!
      </Heading>
      {isLoggedIn && (
        <Flex
          mt={{
            base: '1%',
            sm: '1%',
            md: '1.8%',
            lg: '2%',
            xl: '2%',
          }}
          justifyContent='center'
          alignItems='center'
          textAlign='center'
          fontSize={{
            base: '22px',
            sm: '26px',
            md: '30px',
            lg: '42px',
            xl: '50px',
          }}
        >
          Bronze Saint:<Flex mx='20px'>{username}</Flex>
        </Flex>
      )}
      <Box my={{ base: '20px', md: '35px', lg: '50px' }}>
        <ButtonCustom
          text='PLAY NOW'
          onClick={playNowHandler}
          fontSize={{
            base: '16px',
            sm: '18px',
            md: '20px',
            lg: '22px',
            xl: '24px',
          }}
          height={{
            base: '50px',
            sm: '56px',
            md: '65px',
            lg: '75px',
            xl: '75px',
          }}
          width={{
            base: '120px',
            sm: '126px',
            md: '151px',
            lg: '174px',
            xl: '174px',
          }}
        />
      </Box>
    </Box>
  );

  return (
    <>
      {!isLoggedIn && showLoginModal && (
        <LoginModal onClosingModal={closeLoginModalHandler} />
      )}
      {headerContent}
    </>
  );
};
