import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { TicketCarousel } from './TickettCarousel';

function App() {
  return (
    <ChakraProvider>
      <TicketCarousel />
    </ChakraProvider>
  );
}

export default App;
