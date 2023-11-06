import { Flex, Box } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import StarrySky from '../../components/images/website-img/StarryBack.jpeg';

const ModalCard = ({ children, height, onClick }) => {

  const ModalContent = () => {
    return (
      <>
        <Box
          onClick={onClick}
          position='fixed'
          top='0'
          left='0'
          width='100%'
          height='100vh'
          zIndex='10'
          bg='rgba(0,0,0,0.75)'
          flexWrap='wrap'
        />
        <Flex
          className='modal'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          open
          h={height}
          display='flex'
          flexDirection='column'
          width={{
            base: '340px',
            sm: '450px',
            md: '500px',
            lg: '500px',
            xl: '510px',
          }}
          position='fixed'
          background={`linear-gradient(to top, rgba(179, 224, 242, 0.9), rgba(0, 40, 85, 0.8)), url(${StarrySky})`}
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          backgroundSize='cover'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          zIndex='110'
          alignItems='center'
          justifyContent='center'
          border='3px solid'
          borderRadius='15px'
          borderColor='rgb(13, 32, 61)'
        >
          {children}
        </Flex>
      </>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ModalContent />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ModalCard;
