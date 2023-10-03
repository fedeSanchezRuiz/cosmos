import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({

    styles: {
      global: () => ({
        body: {
          bg: 'rgb(136, 178, 209)',
        },
      }),
    },
  });

  export default theme;