import React from 'react';
import { authContext } from '../hooks/useAuth';

function useAuth() {
  const value = React.useContext(authContext);

  if (!value) {
    throw new Error("AuthContext's value is undefined.");
  }

  return value;
}

export { useAuth };
