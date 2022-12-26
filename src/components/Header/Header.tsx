import React from 'react';
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import MagnifyingGlassIcon from 'components/MagnifyingGlassIcon';

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

          <Box>
            <InputGroup>
              <InputLeftElement
                height="100%"
                pointerEvents="none"
                children={<MagnifyingGlassIcon color="white" />}
              />

              <Input
                backgroundColor="rgba(255, 255, 255, 0.2)"
                type="text"
                placeholder="Pesquisar no blog"
                _placeholder={{ opacity: 0.5, color: '#fff' }}
                border="none"
                borderRadius={5}
                size="lg"
              />
            </InputGroup>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
