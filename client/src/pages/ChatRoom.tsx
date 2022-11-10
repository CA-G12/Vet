import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import Room from '../components/ChatRoom';
import { useAuth } from '../hooks/UseAuthar';
import { MessageList } from '../components/ChatRoom/MessageList';
import ApiServices from '../services/ApiService';
import MassageAvatar from '../components/ChatRoom/MessageList/MassageAvatar';
import IUser from '../Interfaces/post/IUser';

const ChatRoom = () => {
  const { user } = useAuth();
  const params = useParams<{ id: string }>();
  const [receiver, setReceiver] = useState<IUser | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await ApiServices.get(`users/chat/${params?.id}`);
      setReceiver(data);
    })();
  }, [params, user]);

  if (!user || !receiver) return null;
  const roomId =
    user.id && Number(params.id) > user.id
      ? `${user.id}-${params.id}`
      : `${params.id}-${user.id}`;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          width: { xs: '100%', sm: '50%' },
          background: '#356E6E',
          padding: '5px',
          borderRadius: '8px 8px 0 0 ',
          color: '#ffff',
        }}
      >
        <MassageAvatar user={receiver} />
      </Box>
      <Box
        sx={{
          border: '2px solid #356E6E',

          width: { xs: '100%', sm: '50%' },
        }}
      >
        <MessageList roomId={roomId} />
        <Room resverId={params && params?.id} roomId={roomId} />
      </Box>
    </Box>
  );
};

export default ChatRoom;
