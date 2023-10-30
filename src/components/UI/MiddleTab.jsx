import { NavLink } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';
import starryBack from '../../components/images/website-img/StarryBack.jpeg';

const buttonsName = [
  { name: 'Bronze' },
  { name: 'Black' },
  { name: 'Silver' },
  { name: 'Gold' },
  { name: 'Asgard' },
  { name: 'Poseidon' },
];

const MiddleTab = () => {
  return (
    <Flex
      flexDir='column'
      textAlign='center'
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        justifyContent='center'
        alignItems='center'
        wrap='wrap'
      >
        {buttonsName.map((saint) => (
          <NavLink
            key={saint.name}
            to={`/characters/${saint.name}`}
            style={({ isActive }) => ({
              color: isActive ? 'red' : '',
            })}
          >
            <Button
              display='flex'
              color='rgb(13, 32, 61)'
              background={`linear-gradient(to top, rgba(179, 224, 242, 0.9), rgba(0, 40, 85, 0.8)), url(${starryBack})`}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              fontFamily='ARCADECLASSIC'
              letterSpacing='0.04rem'
              fontSize={{
                base: 'x-small',
                sm: 'small',
                md: 'medium',
                lg: 'medium',
                xl: 'medium',
              }}
              width={{
                base: '48px',
                sm: '70px',
                md: '90px',
                lg: '100px',
                xl: '100px',
              }}
              borderRadius='15px'
              id={`/characters/${saint.name}`}
              _hover={{
                background:
                  'linear-gradient(to top, #002855, #B3E0F2)',
                color: 'white',
              }}
            >
              {saint.name}
            </Button>
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default MiddleTab;
