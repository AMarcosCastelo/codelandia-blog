import { ComponentMeta, ComponentStory } from '@storybook/react';

import PostCard from './PostCard';

export default {
  title: 'Example/PostCard',
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  date: '02 de jul, 2021',
  title: 'Agora é oficial: o Windows 11 está vindo',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
  vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel
  diam fringilla, eu ullamcorper ex iaculis.`,
};
