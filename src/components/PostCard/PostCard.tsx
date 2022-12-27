import { Box, Card, Heading, Text } from '@chakra-ui/react';
import HeartIcon from '../HeartIcon';

type PostCardProps = {
  date: string;
  title: string;
  description: string;
};

const PostCard = ({ date, description, title }: PostCardProps): JSX.Element => {
  return (
    <Card padding={5} maxW={900}>
      <Box display="flex" justifyContent="space-between" mb={5}>
        <Text fontSize="md" color="#717171">
          {date}
        </Text>

        <HeartIcon />
      </Box>

      <Heading as="h2" size="md" color="#1A202C" fontWeight="normal" mb={3}>
        {title}
      </Heading>

      <Text color="#717171">{description}</Text>
    </Card>
  );
};

export default PostCard;
