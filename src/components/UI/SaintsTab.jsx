  import { NavLink } from "react-router-dom";
  import { Button, Flex } from "@chakra-ui/react";

  const buttonsName = [
    { name: 'Bronze' },
    { name: 'Black' },
    { name: 'Silver' },
    { name: 'Gold' },
    { name: 'Asgard' },
    { name: 'Poseidon' },
  ];

  const SaintsTab = () => {
    return (
      <Flex flexDir='column' textAlign='center' justifyContent='center' alignItems='center'>
        <Flex justifyContent='center' alignItems='center' wrap='wrap'>{buttonsName.map(saint => 
        <NavLink key={saint.name} to={`/characters/${saint.name}`} style={({ isActive }) => ({color: isActive ? 'red' : ''})}>
          <Button
          display='flex'
          color='rgb(13, 32, 61)'
          background='linear-gradient(to top, #B3E0F2, #002855)'
          fontFamily='ARCADECLASSIC'
          letterSpacing='0.04rem'
          fontSize={{base: 'x-small', sm: 'small', md: 'medium', lg: 'medium', xl: 'medium'}} 
          width={{base: '48px', sm: '60px', md: '90px', lg:'100px', xl: '100px'}} 
          borderRadius='15px' 
          id={`/characters/${saint.name}`}
          _hover={{
            background: 'linear-gradient(to top, #002855, #B3E0F2)', // change to the color you want on hover
            color: 'white', // change to the text color you want on hover
          }}
          >
            {saint.name}
          </Button>
        </NavLink>)}
        </Flex>
      </Flex>
    )
  };

  export default SaintsTab;