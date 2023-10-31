import { Box, Button, Flex } from '@chakra-ui/react';
import { useState, useEffect, useContext } from 'react';
import { NavbarLogo } from './navbar/NavbarLogo';
import AuthContext from '../../context/authContext';
import useInput from '../hooks/useInput';
import Starry from '../../components/images/website-img/StarryBack.jpeg';
import Night from '../../components/images/website-img/NightSkyBack.jpeg';
import ErrorCustom from './ErrorCustom';

const buttonProps = {
  background: `linear-gradient(to bottom, rgba(255, 255, 204, 1), rgba(218, 165, 32, 0.6)), url(${Night})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: '#704214',
  borderRadius: '15px',
  fontFamily: 'ARCADECLASSIC',
  fontWeight: 'extrabold',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  width: '200px',
};

const LoginModal = (props) => {
  const { login } = useContext(AuthContext);
  const [hideMailLabel, setHideMailLabel] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useInput((value) => value.trim().length >= 4);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 6);

  useEffect(() => {
    if (hideMailLabel) {
      if (enteredUsernameIsValid && enteredPasswordIsValid) {
        setFormIsValid(true);
      }
    } else {
      if (
        enteredEmailIsValid &&
        enteredUsernameIsValid &&
        enteredPasswordIsValid
      ) {
        setFormIsValid(true);
      }
    }
  }, [
    enteredEmailIsValid,
    enteredUsernameIsValid,
    enteredPasswordIsValid,
    hideMailLabel,
    setFormIsValid,
  ]);

  const clickLoginHandler = () => {
    setHideMailLabel(true);
  };

  const clickRegisterHandler = () => {
    setHideMailLabel(false);
  };

  const formLoginHandler = async (event) => {
    event.preventDefault();

    const userData = {
      email: enteredEmail,
      username: enteredUsername,
      password: enteredPassword,
    };

    if (formIsValid) {
      try {
        const url = 'http://localhost:3000/users';
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error(
            'Failed to login, please try again later'
          );
        }

        const responseData = await response.json();
        login(responseData.username);

        if (hideMailLabel) {
          resetEmailInput();
        }
        resetUsernameInput();
        resetPasswordInput();
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (error) {
    return <ErrorCustom message={error.message} />;
  }

  const closeModalHandler = () => {
    props.onClosingModal();
  };

  return (
    <>
      <Box
        onClick={closeModalHandler}
        position='fixed'
        top='0'
        left='0'
        width='100%'
        height='100vh'
        zIndex='10'
        bg='rgba(0,0,0,0.75)'
        flexWrap='wrap'
      />
      <Box
        h={{
          base: '520px',
          sm: '520px',
          md: '420px',
          lg: '420px',
          xl: '420px',
        }}
        display='flex'
        flexDirection='column'
        width={{
          base: '340px',
          sm: '450px',
          md: '500px',
          lg: '500px',
          xl: '510px',
        }}
        position='fixed'
        background={`linear-gradient(to top, rgba(179, 224, 242, 0.9), rgba(0, 40, 85, 0.8)), url(${Starry})`}
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        zIndex='110'
        alignItems='center'
        justifyContent='center'
        border='3px solid'
        borderRadius='15px'
        borderColor='rgb(13, 32, 61)'
      >
        <Flex
          mb='10px'
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
          }}
        >
          <Button
            onClick={clickRegisterHandler}
            sx={buttonProps}
          >
            Register
          </Button>
          <Button
            onClick={clickLoginHandler}
            sx={buttonProps}
          >
            Login
          </Button>
        </Flex>
        <form
          onSubmit={formLoginHandler}
          style={{ marginTop: '5px' }}
          display='flex'
        >
          {!hideMailLabel && (
            <Flex
              my='5px'
              w='380px'
              justifyContent={{
                base: 'center',
                lg: 'space-between',
              }}
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
              }}
              alignItems='center'
            >
              <label
                htmlFor='email'
                style={{
                  width: '25%',
                  textAlign: 'center',
                  color: 'rgb(13, 32, 61)',
                  fontWeight: 'bolder',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                <Box
                  fontFamily='ARCADECLASSIC'
                  display='flex'
                  justifyContent={{
                    base: 'center',
                    sm: 'center',
                    md: 'left',
                  }}
                >
                  Email
                </Box>
              </label>
              <input
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                type='email'
                id='email'
                autoComplete='email'
                style={{
                  fontFamily: 'ARCADECLASSIC',
                  width: '75%',
                  border: emailHasError
                    ? '2px solid #b40e0e'
                    : '2px solid rgb(13, 32, 61)',
                  backgroundColor: emailHasError
                    ? '#fddddd'
                    : '#3C6280',
                  color: emailHasError
                    ? 'rgb(13, 32, 61)'
                    : '#F2CE80',
                  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              />
            </Flex>
          )}
          {!hideMailLabel && emailHasError && (
            <Box
              color='red'
              fontFamily='ARCADECLASSIC'
              display='flex'
              justifyContent={{
                base: 'center',
                sm: 'center',
                md: 'left',
              }}
            >
              Enter a valid Email.
            </Box>
          )}
          <Flex
            my='5px'
            w='380px'
            justifyContent={{
              base: 'center',
              lg: 'space-between',
            }}
            flexDirection={{
              base: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
            }}
            alignItems='center'
          >
            <label
              htmlFor='username'
              style={{
                width: '25%',
                textAlign: 'center',
                color: 'rgb(13, 32, 61)',
                fontWeight: 'bolder',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Box
                fontFamily='ARCADECLASSIC'
                display='flex'
                justifyContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'left',
                }}
              >
                Username
              </Box>
            </label>
            <input
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
              value={enteredUsername}
              type='text'
              id='username'
              autoComplete='username'
              style={{
                fontFamily: 'ARCADECLASSIC',
                width: '75%',
                border: usernameHasError
                  ? '2px solid #b40e0e'
                  : '2px solid rgb(13, 32, 61)',
                backgroundColor: usernameHasError
                  ? '#fddddd'
                  : '#3C6280',
                color: usernameHasError
                  ? 'rgb(13, 32, 61)'
                  : '#F2CE80',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            />
          </Flex>
          {usernameHasError && (
            <Box
              color='red'
              fontFamily='ARCADECLASSIC'
              display='flex'
              justifyContent={{
                base: 'center',
                sm: 'center',
                md: 'left',
              }}
            >
              Enter a valid Username.
            </Box>
          )}
          <Flex
            my='5px'
            w='380px'
            justifyContent={{
              base: 'center',
              lg: 'space-between',
            }}
            flexDirection={{
              base: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
            }}
            alignItems='center'
          >
            <label
              htmlFor='password'
              style={{
                width: '25%',
                textAlign: 'center',
                color: 'rgb(13, 32, 61)',
                fontWeight: 'bolder',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Box
                fontFamily='ARCADECLASSIC'
                display='flex'
                justifyContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'left',
                }}
              >
                Password
              </Box>
            </label>
            <input
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
              type='password'
              id='password'
              autoComplete='current-password'
              style={{
                fontFamily: 'ARCADECLASSIC',
                width: '75%',
                border: passwordHasError
                  ? '2px solid #b40e0e'
                  : '2px solid rgb(13, 32, 61)',
                backgroundColor: passwordHasError
                  ? '#fddddd'
                  : '#3C6280',
                color: passwordHasError
                  ? 'rgb(13, 32, 61)'
                  : '#F2CE80',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            />
          </Flex>
          {passwordHasError && (
            <Box
              display='flex'
              justifyContent={{
                base: 'center',
                sm: 'center',
                md: 'left',
              }}
              color='red'
              fontFamily='ARCADECLASSIC'
            >
              Enter a valid password.
            </Box>
          )}
          <Flex
            flexDirection='column'
            my='3px'
            alignItems='center'
          >
            <Box p='8px'>
              <NavbarLogo
                logoHeight='19.5px'
                logoSSHeight='41.5px'
              />
            </Box>
          </Flex>
          <Flex justifyContent='center'>
            <Button
              type='submit'
              h='50px'
              isDisabled={!formIsValid}
              sx={buttonProps}
            >
              Log In
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default LoginModal;
