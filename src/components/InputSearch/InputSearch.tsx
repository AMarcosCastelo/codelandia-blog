import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import MagnifyingGlassIcon from '../MagnifyingGlassIcon';

const InputSearch = () => {
  return (
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
  );
};

export default InputSearch;
