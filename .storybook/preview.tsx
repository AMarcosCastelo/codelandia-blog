import React from 'react';
import { addDecorator } from '@storybook/react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { theme } from '../src/styles/theme';
import { Fonts } from '../src/styles/fonts';

export const parameters = {
  chakra: {
    theme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(storyFn => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <ColorModeScript />
    {storyFn()}
  </ChakraProvider>
))
