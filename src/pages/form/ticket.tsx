// Ticket.tsx
import React from 'react';
import { Box, Text, VStack, Image } from '@chakra-ui/react';
import QRCode  from 'qrcode.react';

interface TicketProps {
  userName: string;
  userNumber: number;
  totalUsers: number;
  eventName: string;
  eventTime: string;
  venue: string;
}

const Ticket: React.FC<TicketProps> = ({ userName, userNumber, totalUsers, eventName, eventTime, venue }) => {
  const qrValue = `${eventName}-${userName}`;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md" bg="white">
      <VStack spacing={4} align="center">
        <Text fontSize="xl" fontWeight="bold">{eventName}</Text>
        <Text>{`${userName} (${userNumber}/${totalUsers})`}</Text>
        <Box>
          <QRCode value={qrValue} size={100} />
        </Box>
        <Text fontWeight="semibold">Time: {eventTime}</Text>
        <Text fontWeight="semibold">Venue: {venue}</Text>
      </VStack>
    </Box>
  );
};

export default Ticket;
