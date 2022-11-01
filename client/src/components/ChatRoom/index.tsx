import { MessageInput } from './MessageInput';

function index({ roomId }: { roomId: string }) {
  return (
    <div>
      <MessageInput roomId={roomId} />
    </div>
  );
}

export default index;
