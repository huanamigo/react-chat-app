import styles from './Search.module.scss';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase';
import { useState } from 'react';

interface IProps {
  setSearchedUser: React.Dispatch<
    React.SetStateAction<{
      username: string;
      img: string;
      lastMessage: string;
      uid: string;
    }>
  >;
}

const Search = ({ setSearchedUser }: IProps) => {
  // const [userQuery, setUserQuery] = useState('');
  // const [user, setUser] = useState(null);
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
            username: docData.displayName,
            img: docData.photoURL,
            lastMessage: '???',
            uid: docData.uid,
          });
        });
      } else {
        setSearchedUser({
          username: '',
          img: '',
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
          // setUserQuery();
          handleSearch(e.target.value);
        }}
      />
      {searchError !== '' && <p>{searchError}</p>}
    </div>
  );
};

export default Search;
