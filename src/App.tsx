import { Box, Container, SimpleGrid } from '@chakra-ui/react';

import Header from './components/Header';
import PostCard from './components/PostCard';
import { mockPostCard } from './utils';

export const App = () => (
  <>
    <Box mb={10}>
      <Header />
    </Box>

    <Container maxW="container.sm" mb={10}>
      <SimpleGrid spacing={5}>
        {Array.from({ length: 10 }).map(() => {
          const postCardMock = mockPostCard();

          return <PostCard {...postCardMock} key={postCardMock.id} />;
        })}
      </SimpleGrid>
    </Container>
  </>
);
