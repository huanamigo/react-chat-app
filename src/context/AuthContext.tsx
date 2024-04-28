import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase';

interface IProps {
  currentUser: {
    photoURL?: string;
    displayName?: string;
  };
  isLoading: boolean;
  setIsLoading: React.Dispatch<boolean>;
}

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

  const contextValue: IProps = {
    currentUser,
    isLoading,
    setIsLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
