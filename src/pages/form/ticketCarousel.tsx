// TicketCarousel.tsx
import React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import Ticket from './ticket';

interface TicketData {
  userName: string;
  userNumber: number;
  totalUsers: number;
  eventName: string;
  eventTime: string;
  venue: string;
}

interface TicketCarouselProps {
  tickets: TicketData[];
}

const TicketCarousel: React.FC<TicketCarouselProps> = ({ tickets }) => {
  const [current, setCurrent] = React.useState(0);

  const nextTicket = () => {
    setCurrent((current + 1) % tickets.length);
  };

  const prevTicket = () => {
    setCurrent((current - 1 + tickets.length) % tickets.length);
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <Ticket {...tickets[current]} />
      <Box mt={4}>
        <Button mr={2} onClick={prevTicket}>Prev</Button>
        <Button onClick={nextTicket}>Next</Button>
      </Box>
    </Flex>
  );
};

export default TicketCarousel;
