import { extendTheme } from '@chakra-ui/react';
import starryNight from '../../components/images/website-img/StarryBack.jpeg';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        minHeight: '100vh',
        background: `linear-gradient(to top, rgba(96, 128, 159, 0.9), rgba(136, 178, 209, 0.8)), url(${starryNight})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontFamily: "'ARCADECLASSIC', Helvetica, sans-serif",
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        color: 'rgb(13, 32, 61)',
      },
    }),
  },
});

export default theme;