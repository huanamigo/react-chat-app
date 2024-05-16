import { createContext, useContext, useReducer } from 'react';
import { AuthContext } from './AuthContext';

export const ChatContext = createContext({});

export const ChatContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const InitialState = {
    chatId: '',
    user: {},
  };
  const { currentUser }: models.IUser & models.IAuthContextValue =
    useContext(AuthContext);

  const chatReducer = (
    state: unknown,
    action: {
      type: string;
      payload: { photoURL: string; displayName: string; uid: string };
    }
  ) => {
    if (action.type === 'CHANGE_USER') {
      console.log(action.payload);
      if (currentUser.uid) {
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      }
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, InitialState);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
