import { signOut } from 'firebase/auth';
import Chats from './Chats/Chats';
import Search from './Search.tsx/Search';
import styles from './Sidebar.module.scss';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { currentUser }: models.IUser = useContext(AuthContext);
  const [searchedUser, setSearchedUser] = useState({
    displayName: '',
    photoURL: '',
    uid: '',
    lastMessage: '',
  });
  const [userQuery, setUserQuery] = useState('');

  const [tempUser] = useState({
    displayName: 'Temp User',
    photoURL: 'https://source.unsplash.com/random',
    lastMessage: 'Last message text',
    uid: 'qwertyuioQWERTYUIO',
  });

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img src={currentUser?.photoURL} alt={currentUser.displayName} />
        <span>{currentUser.displayName}</span>
        <button
          className={styles.logoutBtn}
          onClick={() => {
            signOut(auth)
              .then(() => {
                navigate('../login', { replace: true });
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Logout
        </button>
      </div>
      <Search
        setSearchedUser={setSearchedUser}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
      />
      {searchedUser.displayName !== '' && (
        <Chats
          chatUser={searchedUser}
          setSearchedUser={setSearchedUser}
          isSearched={true}
          setUserQuery={setUserQuery}
        />
      )}
      <Chats chatUser={tempUser} />
    </div>
  );
};

export default Sidebar;
