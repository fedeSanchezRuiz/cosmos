import { Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ComingSoon = ({ src, text = 'Coming Soon!' }) => {

  const imageStyles = {
    transition: 'transform 0.3s', // Add a smooth transition effect
  };

  const imageHoverStyles = {
    transform: 'scale(1.03)', // Increase the size by 10% (adjust as needed),
  };

  return (
    <Flex
        flexDir='column'
        textAlign='center'
      >
        <Heading
          fontFamily='ARCADECLASSIC'
          fontSize={{
            base: '30px',
            sm: '32px',
            md: '36px',
            lg: '40px',
            xl: '50px',
          }}
        >
          {text}
        </Heading>
        <Link to='..'>
        <Image
          mt='2%'
          w={{
            base: '330px',
            sm: '340px',
            md: '360px',
            lg: '385px',
            xl: '490px',
          }}
          h={{
            base: '250px',
            sm: '270px',
            md: '295px',
            lg: '320px',
            xl: '400px',
          }}
          src={src}
          style={imageStyles}
          _hover={imageHoverStyles}
        />
        </Link>
      </Flex>
  )
};

export default ComingSoon;