import { Flex } from "@chakra-ui/react";

const Cardwrapper = (props) => {
  return (
    <Flex
      minH='430px'
      mx={{ base: '5%', sm: '6%', md: '8%'}}
      mb={{ base: 'none', sm: '4%', md: '4%', lg: '5%', xl: '6%'}}
      mt={{ base: '25%', sm: '18%', md: '14%', lg: '10%', xl: '10%'}}
      justifyContent='center' // Center horizontally
      alignItems='center' // Center vertically
      wrap='wrap'
      flexDir='column'
    >
      {props.children}
    </Flex>
  )
};

export default Cardwrapper;