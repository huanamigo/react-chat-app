import { useContext } from 'react';
import styles from './Chats.module.scss';
import { AuthContext } from '../../../context/AuthContext';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../../Firebase';

interface IProps {
  isSearched?: boolean;
  chatUser: {
    username: string;
    img: string;
    lastMessage: string;
    uid: string;
  };
}

interface UserType {
  currentUser: {
    photoURL?: string;
    displayName?: string;
    uid?: string;
  };
}

const Chats = ({ chatUser, isSearched }: IProps) => {
  const { currentUser }: UserType = useContext(AuthContext);

  const handleSelect = async () => {
    if (currentUser.uid !== '' && currentUser.uid !== undefined) {
      const combinedId =
        currentUser.uid > chatUser.uid
          ? currentUser.uid + chatUser.uid
          : chatUser.uid + currentUser.uid;
      console.log(combinedId);
      try {
        const q = query(
          collection(db, 'chats'),
          where('uid', '==', combinedId)
        );

        const res = await getDocs(q);

        // if (!res.exists()) {
        //create chat
        // await setDoc(doc, (db, 'chats', combinedId), { messages: [] });
        // }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(currentUser.uid + chatUser.uid);
  };

  return (
    <div className={styles.container}>
      <img src={chatUser.img} />
      {isSearched ? (
        <div onClick={() => handleSelect()} className={styles.wrapper}>
          <p className={styles.username}>{chatUser.username}</p>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <p className={styles.username}>{chatUser.username}</p>
          <p className={styles.message}>{chatUser.lastMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Chats;
