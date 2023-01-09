import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from 'utils/Button';
import { inputTheme } from 'utils/inputStyle';
import '@fontsource/gothic-a1';

const theme = {
  styles: {
    global: {
      'h1, h2': {
        fontWeight: '700',
      },

      body: {
        fontFamily: 'Gothic A1, sans-serif',
      },
    },
  },
};

export const customTheme = extendTheme({
  components: { Button: buttonTheme, Input: inputTheme },
  theme,
});
