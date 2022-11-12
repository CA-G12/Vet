import { Container } from '@mui/system';
import { MessageInput } from './MessageInput';

function index({
  roomId,
  resverId,
}: {
  roomId: string;
  resverId: string | undefined;
}) {
  return (
    <Container maxWidth="md">
      <MessageInput resverId={resverId} roomId={roomId} />
    </Container>
  );
}

export default index;
