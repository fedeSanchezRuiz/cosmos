import { Flex } from '@chakra-ui/react';

const ScreenCard = ({
  backgroundImage,
  justifyContent,
  children,
}) => {
  return (
    <Flex
      style={{
        flexDirection: 'column',
        justifyContent: justifyContent,
        alignItems: 'center',
        height: '100vh',
        maxWidth: '768px',
        margin: '0 auto',
        backgroundImage: `linear-gradient(to bottom, rgba(96, 128, 159, 0.2), rgba(136, 178, 209, 0.3)), url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </Flex>
  );
};

export default ScreenCard;