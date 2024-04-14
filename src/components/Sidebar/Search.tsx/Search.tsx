// import { useState } from 'react';
import styles from './Search.module.scss';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase';

const Search = () => {
  // const [userQuery, setUserQuery] = useState('');
  // const [user, setUser] = useState(null);

  const handleSearch = async (userQuery: string) => {
    console.log(userQuery);
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', userQuery)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          // setUserQuery();
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
