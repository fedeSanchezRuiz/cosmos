import { Button, HStack, Link } from '@chakra-ui/react';

const buttons = [
  { name: 'About', path: 'about' },
  { name: 'Rules', path: 'rules' },
  { name: 'Characters', path: 'characters' },
  { name: 'Cloths', path: 'cloths' },
];

export const NavbarButtons = () => {

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const buttonStyles = {
    w: '150px',
    h: '45px',
    bg: 'transparent',
    color: '#C0C0C0',
    variant: 'solid',
    colorScheme: 'blackAlpha',
  };

  const buttonHoverStyles = {
    transform: 'scale(1.05)', // Increase the size by 10% (adjust as needed),

  };

  return (
    <HStack>
      {buttons.map(button => <Link to={button.path}>
        <Button key={button.name} sx={buttonStyles} style={imageStyles} _hover={buttonHoverStyles}>{button.name}</Button>
      </Link>)}
      <Button variant='solid' sx={buttonStyles} style={imageStyles} _hover={buttonHoverStyles}>Login</Button>
    </HStack>
  )
};
