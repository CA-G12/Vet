import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { authContext } from '../../hooks/useAuth';
import { ProfileTabs } from './ProfileTabs';
import './style.css';

export const Profile = () => {
  const { user } = React.useContext(authContext);

  return (
    <div>
      <div className="profile-content">
        <div>
          <img src={user?.avatar} alt="user" className="user-avatar" />
          <h3>
            {user?.name}
          </h3>
          <p>
            {' '}
            <MailOutlineIcon color="disabled" />
            <span>
              {user?.email}
              {' '}
            </span>

          </p>
        </div>
        <div>
          <ProfileTabs />
        </div>
      </div>
    </div>
  );
};
