import { extendTheme } from '@chakra-ui/react';
import starryNight from '../../components/images/website-img/StarryBack.jpeg';
import coliseum from '../images/website-img/coliseumFlipped.png';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        minHeight: '100vh',
        position: 'relative',
        background: `linear-gradient(to top, rgba(96, 128, 159, 0.9), rgba(136, 178, 209, 0.8)), url(${starryNight})`,
        backgroundPosition: 'center 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontFamily: "'ARCADECLASSIC', Helvetica, sans-serif",
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        color: 'rgb(13, 32, 61)',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${coliseum})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        },
      },
    }),
  },
});

export default theme;
