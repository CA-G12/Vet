import { Box } from '@mui/system';
import { useContext } from 'react';
import { authContext } from '../../../hooks/useAuth';
import IMassage from '../../../Interfaces/post/IMassage';
import MassageAvatar from './MassageAvatar';

const Message = ({
  message,
  isOwnMessage,
}: {
  message: IMassage;
  isOwnMessage: boolean;
}) => {
  const { text } = message;
  const { user } = useContext(authContext);
  console.log(message, isOwnMessage);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={isOwnMessage ? 'flex-end' : 'flex-start'}
      sx={{ margin: '10px 10px' }}
    >
      <Box
        display="flex"
        flexDirection={isOwnMessage ? 'row' : 'row-reverse'}
        alignItems="flex-start"
      >
        <p
          style={{
            color: !isOwnMessage ? '#356E6E' : '#EFF2F2',
            background: isOwnMessage ? '#356E6E' : '#EFF2F2',
            padding: '5px',
            borderRadius: '8px',
            margin: '  12px 10px',
          }}
        >
          {text}
        </p>
        <MassageAvatar user={isOwnMessage ? user : message} />
      </Box>
    </Box>
  );
};
export default Message;
