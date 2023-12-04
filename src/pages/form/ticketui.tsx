// App.tsx or your main component file
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import TicketCarousel from './ticketCarousel';

const App = () => {
  const tickets = [
    {
      userName: "Amit Kumar",
      userNumber: 1,
      totalUsers: 3,
      eventName: "57 Community Meals",
      eventTime: "2023-12-26 (1 pm - 4 pm)",
      venue: "Near NVCC",
    },
    {
        userName: "Vasudev Hari",
        userNumber: 2,
        totalUsers: 3,
        eventName: "57 Community Meals",
        eventTime: "2023-12-26 (1 pm - 4 pm)",
        venue: "Near NVCC",
      },
      {
        userName: "Namrup Avatar",
        userNumber: 3,
        totalUsers: 3,
        eventName: "57 Community Meals",
        eventTime: "2023-12-26 (1 pm - 4 pm)",
        venue: "Near NVCC",
      },
    // ... add other users
  ];

  return (
    <ChakraProvider>
      <TicketCarousel tickets={tickets} />
    </ChakraProvider>
  );
};

export default App;
