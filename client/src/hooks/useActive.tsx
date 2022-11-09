import React from 'react';
import { getWhoActive } from '../helpers/onActiveUsersChange';

function useActive() {
  const [active, setActive] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = getWhoActive(setActive);
    return unsubscribe;
  }, []);

  return active;
}

export { useActive };
