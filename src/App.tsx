import { Box, Container, SimpleGrid } from '@chakra-ui/react';

import ColorMode from './components/ColorMode';
import Header from './components/Header';
import PostCard from './components/PostCard';
import { mockPostCard } from './utils';

export const App = () => (
  <ColorMode mode="light" background="#F3F5F7">
    <Box mb={10}>
      <Header />
    </Box>

    <Container maxW="container.sm" mb={10}>
      <SimpleGrid spacing={10}>
        {Array.from({ length: 10 }).map(() => {
          const postCardMock = mockPostCard();

          return <PostCard {...postCardMock} key={postCardMock.id} />;
        })}
      </SimpleGrid>
    </Container>
  </ColorMode>
);
