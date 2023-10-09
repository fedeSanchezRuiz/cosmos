import { Flex, Box } from "@chakra-ui/react";
import SaintsTab from "../components/UI/SaintsTab";
import ComingSoon from "../components/UI/ComingSoon";
import CardWrapper from "../components/UI/CardWrapper";
import miloAttack from '../images/MiloScorpio.png';

const Characters = () => {
  
  return (
    <CardWrapper>
      <Flex
        flexDir='column'
        textAlign='center'
        justifyContent='center'
        alignItems='center'
        wrap='wrap'
      >
        <SaintsTab />
        <ComingSoon text={<Box my='5%'>'Pick your Saint'</Box>} src={miloAttack} />
      </Flex>
    </CardWrapper>
  )
};

export default Characters;