import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  fonts: {
    body: 'Poppins',
  },
  styles: {
    global: {
      'html, body': {
        height: '100vh',
        backgroundColor: 'gray.50',
      },
    },
  },
});
