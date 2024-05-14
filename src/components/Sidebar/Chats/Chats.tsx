import { useContext, useEffect, useState } from 'react';
import styles from './Chats.module.scss';
import { AuthContext } from '../../../context/AuthContext';
import {
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../../Firebase';
import { ChatContext } from '../../../context/ChatContext';

interface IProps {
  isSearched?: boolean;
  chatUser: {
    displayName: string;
    photoURL: string;
    uid: string;
    lastMessage: string;
  };
  setSearchedUser?: React.Dispatch<
    React.SetStateAction<{
      displayName: string;
      photoURL: string;
      uid: string;
      lastMessage: string;
    }>
  >;
  setUserQuery?: React.Dispatch<React.SetStateAction<string>>;
}

type ChatArrayType = [
  string,
  {
    userInfo: {
      displayName: string;
      photoURL: string;
      uid: string;
      lastMessage: string;
    };
    date: {
      seconds: number;
      nanoseconds: number;
    };
  }
];

const Chats = ({
  chatUser,
  setSearchedUser,
  isSearched,
  setUserQuery,
}: IProps) => {
  const { currentUser }: models.IUser = useContext(AuthContext);
  const { dispatch }: models.IChatContext = useContext(ChatContext);
  const [chats, setChats] = useState({});

  useEffect(() => {
    if (currentUser?.uid) {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        const data = doc.data();
        if (data !== undefined) {
          setChats(data);
          // console.log(Object.entries(data));
        }
      });

      return () => {
        unsub();
      };
    }
  }, [currentUser.uid]);

  const handleSearchSelect = async () => {
    if (currentUser.uid !== '' && currentUser.uid !== undefined) {
      const combinedId =
        currentUser.uid > chatUser.uid
          ? currentUser.uid + chatUser.uid
          : chatUser.uid + currentUser.uid;
      try {
        const res = await getDoc(doc(db, 'chats', combinedId));

        if (!res.exists()) {
          await setDoc(doc(db, 'chats', combinedId), { messages: [] });

          await updateDoc(doc(db, 'userChats', currentUser.uid), {
            [combinedId + '.userInfo']: {
              uid: chatUser.uid,
              displayName: chatUser.displayName,
              photoURL: chatUser.photoURL,
            },
            [combinedId + '.date']: serverTimestamp(),
          });

          await updateDoc(doc(db, 'userChats', chatUser.uid), {
            [combinedId + '.userInfo']: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
            },
            [combinedId + '.date']: serverTimestamp(),
          });
        }
        if (isSearched) {
          setSearchedUser!({
            displayName: '',
            photoURL: '',
            lastMessage: '',
            uid: '',
          });
          setUserQuery!('');
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(currentUser.uid + chatUser.uid);
  };

  const handleSelect = (user: {
    displayName: string;
    photoURL: string;
    uid: string;
    lastMessage: string;
  }) => {
    dispatch!({ type: 'CHANGE_USER', payload: user });
  };

  return (
    <>
      {isSearched ? (
        <div
          onClick={() => {
            handleSearchSelect();
            handleSelect(chatUser);
          }}
          className={styles.container}
        >
          <img src={chatUser.photoURL} />
          <div className={styles.wrapper}>
            <p className={styles.username}>{chatUser.displayName}</p>
          </div>
        </div>
      ) : (
        <>
          {(Object.entries(chats) as ChatArrayType[]).map(
            (chat: ChatArrayType) => (
              <div
                key={chat[0]}
                className={styles.container}
                onClick={() => handleSelect(chat[1].userInfo)}
              >
                <img src={chat[1].userInfo.photoURL} />
                <div className={styles.wrapper}>
                  <p className={styles.username}>
                    {chat[1].userInfo.displayName}
                  </p>
                  <p className={styles.message}>
                    {chat[1].userInfo.lastMessage}
                  </p>
                </div>
              </div>
            )
          )}
        </>
      )}
    </>
  );
};

export default Chats;
