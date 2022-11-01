import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import Room from '../components/ChatRoom';
import { useAuth } from '../services/UseAuthar';
import { MessageList } from '../components/ChatRoom/MessageList';
import ApiServices from '../services/ApiService';
import MassageAvatar from '../components/ChatRoom/MessageList/MassageAvatar';
import IUser from '../Interfaces/post/IUser';

const ChatRoom = () => {
  const { user } = useAuth();
  const params = useParams();
  const [resver, setResever] = useState<IUser>({
    id: 0,
    name: '',
    avatar: '',
    role: '',
  });
  const roomId =
    user?.id && Number(params.id) > user?.id
      ? `${user?.id}-${params.id}`
      : `${params?.id}-${user?.id}`;
  useEffect(() => {
    (async () => {
      const resever = await ApiServices.get(`users/chat/${params.id}`);
      setResever(resever.data);
    })();
  }, [params]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h2 style={{ marginBottom: '50px' }}>Chat Room with {resver.name}</h2>
      <Box
        sx={{
          width: { xs: '100%', sm: '50%' },
          background: '#356E6E',
          padding: '5px',
          borderRadius: '8px 8px 0 0 ',
          color: '#ffff',
        }}
      >
        <MassageAvatar user={resver} />
      </Box>
      <Box
        sx={{
          border: '2px solid #356E6E',

          width: { xs: '100%', sm: '50%' },
        }}
      >
        <MessageList roomId={roomId} />
        <Room roomId={roomId} />
      </Box>
    </Box>
  );
};

export default ChatRoom;
