import { Button, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme.cjs';

export const Chakra = () => {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal" size="sm">
        Button
      </Button>
      <Text
        w="fit-contet"
        p="5.5"
        px="50px"
        bg="blue.3001°1°"
        borderRadius="10px"
        m="0 auto"
        mt="8"
        fontWeight="bold"
        color="w"
        fontSize="xl"
        sx={{ color: 'w' }}
      >
        Get Started
      </Text>
    </ChakraProvider>
  );
};
