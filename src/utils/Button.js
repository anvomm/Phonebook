import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const pinkButton = defineStyle({
  border: 'none', // change the appearance of the border
  borderRadius: 3, // remove the border radius
  bgColor: '#FC0A7E',
  color: '#fff',

  _hover: {
    bgColor: 'transparent',
    border: '1px solid #B04BB3',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { pinkButton },
});
