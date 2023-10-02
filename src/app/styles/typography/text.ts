import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  variants: {
    caption: {
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '12px',
    },
    small: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
    },
    medium: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
    },
    paragraph: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '18px',
    },
    large: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '22px',
    },
  },
});
