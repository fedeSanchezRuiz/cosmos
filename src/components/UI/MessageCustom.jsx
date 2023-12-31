import { Flex, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const imageStyles = {
  transition: 'transform 0.3s',
};

const imageHoverStyles = {
  transform: 'scale(1.03)',
};

const MessageCustom = ({ src, text = 'Coming Soon!', alt = 'ShakaMeditation' }) => {
  return (
    <Flex
      flexDir='column'
      textAlign='center'
    >
      <Heading
        mt='5%'
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
          alt={alt}
          style={imageStyles}
          _hover={imageHoverStyles}
        />
      </Link>
    </Flex>
  );
};

export default MessageCustom;
