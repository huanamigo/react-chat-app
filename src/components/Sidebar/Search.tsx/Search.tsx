import styles from './Search.module.scss';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase';
import { useState } from 'react';

interface IProps {
  setSearchedUser: React.Dispatch<
    React.SetStateAction<{
      displayName: string;
      photoURL: string;
      lastMessage: string;
      uid: string;
    }>
  >;
  userQuery: string;
  setUserQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ setSearchedUser, userQuery, setUserQuery }: IProps) => {
  const [searchError, setSearchError] = useState('');

  const handleSearch = async (userQuery: string) => {
    const q = query(collection(db, 'users'), where('email', '==', userQuery));

    try {
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot.docs.length);
      if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          console.log(docData);
          setSearchedUser({
            displayName: docData.displayName,
            photoURL: docData.photoURL,
            lastMessage: '???',
            uid: docData.uid,
          });
        });
      } else {
        setSearchedUser({
          displayName: '',
          photoURL: '',
          lastMessage: '',
          uid: '',
        });
      }
    } catch (error) {
      setSearchError(String(error));
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search email"
        onChange={(e) => {
          setUserQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        value={userQuery}
      />
      {searchError !== '' && <p>{searchError}</p>}
    </div>
  );
};

export default Search;
