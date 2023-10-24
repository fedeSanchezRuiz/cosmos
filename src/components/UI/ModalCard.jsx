import { Flex, Box } from "@chakra-ui/react";
import ReactDOM from 'react-dom';
import Starry from '../../images/StarryBack.jpeg';
import { useNavigate } from 'react-router-dom';

const ModalCard = ({ children, height }) => {

  const navigate = useNavigate();

  const handleBackdropClick = () => {
    navigate('/');
  };

  const ModalContent = () => {
    return (
      <>
      <Box
        onClick={handleBackdropClick}
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
        className="modal"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        open
        h={height} // Set the height to the passed prop
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
        background= {`linear-gradient(to top, rgba(179, 224, 242, 0.9), rgba(0, 40, 85, 0.8)), url(${Starry})`}
        backgroundPosition= 'center'
        backgroundRepeat= 'no-repeat'
        backgroundSize= 'cover'
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
    )
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ModalContent />,
        document.getElementById('modal-root')
      )}
    </>
  )
};

export default ModalCard;