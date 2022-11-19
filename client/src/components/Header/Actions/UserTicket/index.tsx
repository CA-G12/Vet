import { Link } from 'react-router-dom';
import IAuth from '../../../../Interfaces/IAuth';
import {
  UserAvatar,
  UserNameText,
  UserTicketBox,
} from '../../components.styled';

type Props = {
  user: IAuth | null | undefined;
};

export const UserTicket = ({ user }: Props) => (
  <UserTicketBox>
    <Link to={`users/${user?.id}`}>
      <UserAvatar alt="UserAvatar" src={user?.avatar} />
    </Link>
    <UserNameText gutterBottom variant="h5">
      {user?.name}
    </UserNameText>
  </UserTicketBox>
);
