import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  variants: {
    small: {
      fontSize: '30px',
      fontWeight: 800,
      lineHeight: '38px',
    },
    medium: {
      fontSize: '52px',
      fontWeight: 800,
      lineHeight: '64px',
    },
  },
});
