import { ChakraProvider, ColorModeScript, LightMode } from '@chakra-ui/react';

import { Fonts } from './fonts';
import { theme } from './theme';

const CustomChakraProvider = ({ children }: any) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <ColorModeScript />
    <LightMode>{children}</LightMode>
  </ChakraProvider>
);

export default CustomChakraProvider;
