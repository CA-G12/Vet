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
    <UserAvatar alt="Reem" src={user?.avatar} />
    <UserNameText gutterBottom variant="h5">
      {user?.name}
    </UserNameText>
  </UserTicketBox>
);
