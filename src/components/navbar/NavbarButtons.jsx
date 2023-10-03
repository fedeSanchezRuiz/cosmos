import { HamburgerIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, Link, IconButton } from '@chakra-ui/react';

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
      <IconButton
        aria-label='Open Menu'
        size='lg'
        background= 'linear-gradient(to bottom, #B3E0F2, #002855)'
        color= 'rgb(23, 42, 71)'
        mr={2}
        icon={<HamburgerIcon />}
        display={{ base: 'flex', sm: 'block', md: 'block', lg: 'none' }}
      />
      <Flex
        display={{ base: 'none', sm: 'none', lg: 'block' }}
        alignItems='center'
        justifyContent='space-between'
      >
        {buttons.map(button => (
          <Link to={button.path} key={button.name}>
            <Button
              sx={buttonStyles}
              style={imageStyles}
              _hover={buttonHoverStyles}
            >
              {button.name}
            </Button>
          </Link>
        ))}
        <Button
          variant='solid'
          sx={buttonStyles}
          style={imageStyles}
          _hover={buttonHoverStyles}
        >
          Login
        </Button>
      </Flex>
    </HStack>
  );
};
