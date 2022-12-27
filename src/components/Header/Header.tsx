import { Box, Container, Text } from '@chakra-ui/react';

import InputSearch from '../InputSearch';

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      bg="linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%)"
      position="relative"
      left={0}
      top={0}
    >
      <Container maxW="container.sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height={150}
          maxH={150}
          marginY={10}
        >
          <Box display="flex" justifyContent="space-between">
            <Text color="white">Codelândia</Text>

            <Text color="white">Blog</Text>
          </Box>

          <InputSearch />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
