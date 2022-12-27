import { faker } from '@faker-js/faker';

import { PostCardProps } from 'components/PostCard';

export const mockPostCard = (): PostCardProps & { id: string } => ({
  date: '02 de jul, 2021',
  description: faker.lorem.paragraph(),
  title: faker.lorem.slug(),
  id: faker.datatype.uuid(),
});
