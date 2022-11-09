import { useEffect } from 'react';
import { setActiveUser } from '../../helpers/setActiveUser';
import { useAuth } from '../../hooks/UseAuthar';
import { unsetActiveUser } from '../../helpers/unsetActiveUser';

const WhoActive = () => {
  const { user } = useAuth();
  useEffect(() => {
    if (user && user.role === 'DOCTOR') {
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
          unsetActiveUser(user.id);
        } else {
          setActiveUser(user, true);
        }
      });
    }
  }, [user]);
  return <div />;
};

export default WhoActive;
