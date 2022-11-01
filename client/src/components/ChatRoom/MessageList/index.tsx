import { Box } from '@mui/system';
import React from 'react';
import IMassage from '../../../Interfaces/post/IMassage';
import { useAuth } from '../../../services/UseAuthar';
import { useMessages } from '../../../services/useMessages';
import MassageAvatar from './MassageAvatar';
import Massage from './Massege';

const MessageList = ({ roomId }: { roomId: string }) => {
  const containerRef = React.useRef(null);
  const { user } = useAuth();
  const messages = useMessages(roomId);

  return (
    <Box
      sx={{
        height: '400px',
        overflowY: 'auto ',
        overflowX: 'hidden',
      }}
      className="message-list-container"
      ref={containerRef}
    >
      <ul className="message-list">
        {messages.map((x: IMassage) => (
          <Massage key={x?.id} message={x} isOwnMessage={x?.uid === user?.id} />
        ))}
      </ul>
    </Box>
  );
};

export { MessageList };
