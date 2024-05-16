/* eslint-disable @typescript-eslint/no-unused-vars */
namespace models {
  interface IChatContext {
    dispatch?: React.Dispatch<{
      type: string;
      payload: {
        uid: string;
      };
    }>;
  }

  interface IUser {
    currentUser: {
      photoURL?: string;
      displayName?: string;
      uid?: string;
    };
  }

  interface IAuthContextValue {
    isLoading: boolean;
    setIsLoading: React.Dispatch<boolean>;
  }

  interface IUserFromContext {
    data?: {
      user?: {
        photoURL?: string;
        displayName?: string;
        uid?: string;
      };
      chatId: string;
    };
  }
}
