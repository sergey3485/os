import { extendTheme } from '@chakra-ui/react';
import { Heading } from '@/app/styles/typography/heading';

const theme = extendTheme({
  colors: {
    brand: {
      blue: 'rgba(27, 60, 116, 1)',
      red: 'rgba(255, 0, 0, 1)',
      white: '#FFFFFF',
    },
  },
  components: {
    Heading,
  },
  breakpoints: {
    sm: '320px',
    md: '1200px',
    lg: '1920px',
  },
});

export default theme;
