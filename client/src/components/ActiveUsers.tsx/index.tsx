import { useEffect } from 'react';
import { SendIsActive } from '../../helpers/setActiveUser';
import { useAuth } from '../../hooks/UseAuthar';
import { deleteOffLine } from '../../helpers/unsetActiveUser';

const WhoActive = () => {
  const { user } = useAuth();
  useEffect(() => {
    if (user && user.role === 'DOCTOR') {
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
          deleteOffLine(user.id);
        } else {
          SendIsActive(user, true);
        }
      });
    }
  }, [user]);
  return <div />;
};

export default WhoActive;
