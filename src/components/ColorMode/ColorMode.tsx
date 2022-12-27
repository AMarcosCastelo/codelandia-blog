import { Box, DarkMode, LightMode } from '@chakra-ui/react';

type ColorModeProps = {
  mode: 'light' | 'dark';
  background?: string;
  children: React.ReactNode;
};

const ColorMode = ({ children, mode, background }: ColorModeProps) => {
  if (mode === 'light') {
    return (
      <LightMode>
        <Box data-theme="light" background={background}>
          {children}
        </Box>
      </LightMode>
    );
  } else {
    return (
      <DarkMode>
        <Box data-theme="dark" background={background}>
          {children}
        </Box>
      </DarkMode>
    );
  }
};

export default ColorMode;
