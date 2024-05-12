import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase';

export const AuthContext = createContext({
  currentUser: {},
  isLoading: true,
  setIsLoading: (data: boolean) => {
    data;
  },
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      user && setCurrentUser(user);
      setIsLoading(false);
    });

    return () => {
      unsub();
    };
  }, [currentUser]);

  const contextValue: models.IUser & models.IAuthContextValue = {
    currentUser,
    isLoading,
    setIsLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
