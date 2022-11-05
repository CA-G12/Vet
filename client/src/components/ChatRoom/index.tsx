import { MessageInput } from './MessageInput';

function index({
  roomId,
  resverId,
}: {
  roomId: string;
  resverId: string | undefined;
}) {
  return (
    <div>
      <MessageInput resverId={resverId} roomId={roomId} />
    </div>
  );
}

export default index;
