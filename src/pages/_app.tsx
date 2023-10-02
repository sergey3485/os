import * as React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyles } from '../app/styles/global';
import theme from '@/app/styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
