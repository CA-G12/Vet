import IAuth from '../../../../Interfaces/IAuth';
import {
  NavigationAnchor,
  UserAvatar,
  UserNameText,
  UserTicketBox,
} from '../../components.styled';

type Props = {
  user: IAuth | null | undefined;
};

export const UserTicket = ({ user }: Props) => (
  <NavigationAnchor to={`users/${user?.id}`}>
    <UserTicketBox>
      <UserAvatar alt="UserAvatar" src={user?.avatar} />
      <UserNameText gutterBottom variant="h5">
        {user?.name}
      </UserNameText>
    </UserTicketBox>
  </NavigationAnchor>
);
