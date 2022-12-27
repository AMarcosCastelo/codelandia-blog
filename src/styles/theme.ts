import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  disableTransitionOnChange: true,
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Lexend Deca', sans-serif`,
    body: `'Lexend Deca', sans-serif`,
  },
});
