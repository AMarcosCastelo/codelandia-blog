import { ComponentMeta } from '@storybook/react';

import InputSearch from './InputSearch';

export default {
  title: 'Example/InputSearch',
  component: InputSearch,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof InputSearch>;

export const Primary = () => <InputSearch />;
