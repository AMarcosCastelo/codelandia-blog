import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { Fonts } from './fonts';
import { theme } from './theme';

const CustomChakraProvider = ({ children }: any) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <ColorModeScript />
    {children}
  </ChakraProvider>
);

export default CustomChakraProvider;
