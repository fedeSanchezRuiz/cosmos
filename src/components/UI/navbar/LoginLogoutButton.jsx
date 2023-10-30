import React from 'react';
import { Button } from '@chakra-ui/react';
import starryNight from '../../images/website-img/StarryBack.jpeg';

const LoginLogoutButton = ({
  children,
  onClick,
  imageStyles,
  buttonStyles,
  buttonHoverStyles,
  width,
  mx,
  height,
  fontSize,
}) => (
  <Button
    mx={mx}
    background={`linear-gradient(to bottom, rgba(255, 255, 204, 1), rgba(218, 165, 32, 0.6)), url(${starryNight})`}
    backgroundPosition='center'
    backgroundRepeat='no-repeat'
    backgroundSize='cover'
    color='#704214'
    variant='solid'
    w={width}
    h={height}
    fontWeight='extrabold'
    fontFamily='ARCADECLASSIC'
    fontSize={fontSize}
    letterSpacing='0.04rem'
    style={imageStyles}
    _hover={buttonHoverStyles}
    borderRadius='25px'
    onClick={onClick}
  >
    {children}
  </Button>
);

export default LoginLogoutButton;
