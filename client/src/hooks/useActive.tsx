import React from 'react';
import { onActiveUsersChange } from '../helpers/onActiveUsersChange';

function useActive() {
  const [active, setActive] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = onActiveUsersChange(setActive);
    return unsubscribe;
  }, []);

  return active;
}

export { useActive };
