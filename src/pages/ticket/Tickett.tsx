import { AtSignIcon, CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { Box, Text, VStack, Image, Icon, Center, HStack } from '@chakra-ui/react';
import QRCode from 'qrcode.react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

interface TicketProps {
    userName: string;
    userNumber: number;
    totalUsers: number;
    eventName: string;
    eventTime: string;
    venue: string;
}

interface ArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }
  
const ArrowStyle = {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    zIndex: 2,
    width: '30px',
    height: '30px',
    color: 'black',
    background: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  };
  
  export const NextArrow : React.FC<ArrowProps> = ({ onClick }) => (
    <Box sx={{ ...ArrowStyle, right: '15px' }} onClick={onClick}>
      <Icon as={MdArrowForward} />
    </Box>
  );
  
  export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <Box sx={{ ...ArrowStyle, left: '15px' }} onClick={onClick}>
      <Icon as={MdArrowBack} />
    </Box>
  );

// export const Ticket = ({ userName, event, startTime, endTime, venue }: TicketProps) => {
//     const qrValue = `${event}-${userName}`;
//   return (
//     <Box border="1px" borderColor="gray.200" p={4} borderRadius="md" bg="white">
//       <VStack spacing={3}>
//         <Text fontWeight="bold">{userName}</Text>
//         <Text>{event}</Text>
//         <Box>
//           <QRCode value={qrValue} size={100} />
//         </Box>
//         <Text>{`${startTime} - ${endTime}`}</Text>
//         <Text>{venue}</Text>
//       </VStack>
//     </Box>
//   );
// };

export const Ticket: React.FC<TicketProps> = ({ userName, userNumber, totalUsers, eventName, eventTime, venue }) => {
    const qrValue = `${eventName}-${userName}`;
  
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md" bg="gray.50" display="flex" alignItems="Center" justifyContent="center" height="100%" maxWidth="sm" m="auto">
        <VStack spacing={4} align="center" alignItems="center" justifyContent="center">
            
          <Text fontSize="xl" fontWeight="bold">{`${userName} (${userNumber}/${totalUsers})`}</Text>
          <Text fontSize='lg' fontWeight="semibold">Ticket: 57 Community meals</Text>
          <Box>
            <QRCode bgColor="#F7FAFC" value={qrValue} size={128} />
          </Box>
          
        <Text marginBottom={-3}>
            <CalendarIcon/>  2023-12-26 
      </Text>
      <HStack spacing={3}>
      <Text>
            <TimeIcon/> 1pm - 4pm
      </Text>
      <Text >
          <AtSignIcon/>   Williamsburg</Text>
          </HStack>
        </VStack>
      </Box>
    );
  };

  export default Ticket;