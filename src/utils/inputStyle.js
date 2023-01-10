import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const styled = definePartsStyle({
  field: {
    background: '#fff',
    width: '100%',
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { styled },
});
