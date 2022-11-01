import React from 'react';
import { useAuth } from '../../../services/UseAuthar';
import { sendMessage } from '../../../helpers/SendMassege';

const MessageInput = ({ roomId }: { roomId: string }) => {
  const { user } = useAuth();
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user) {
      sendMessage(roomId, user, value);
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-container">
      <input
        type="text"
        placeholder="Enter a message"
        value={value}
        onChange={handleChange}
        style={{ width: '80%', padding: '5px', outline: 'none' }}
        required
        minLength={1}
      />
      <button
        style={{
          width: '20%',
          padding: '7px',
          background: value && '#356E6E',
          color: value && '#ffff',
          border: 'none',
        }}
        type="submit"
        disabled={value === ''}
      >
        Send
      </button>
    </form>
  );
};
export { MessageInput };
