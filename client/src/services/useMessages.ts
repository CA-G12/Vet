import React from 'react';
import { getMessages } from '../helpers/getMessages';

function useMessages(roomId: any) {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = getMessages(roomId, setMessages);
    return unsubscribe;
  }, [roomId]);

  return messages;
}

export { useMessages };
