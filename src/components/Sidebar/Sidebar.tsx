import { signOut } from 'firebase/auth';
import Chats from './Chats/Chats';
import Search from './Search.tsx/Search';
import styles from './Sidebar.module.scss';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

interface UserType {
  currentUser: {
    photoURL?: string;
    displayName?: string;
  };
}

const Sidebar = () => {
  const navigate = useNavigate();
  const { currentUser }: UserType = useContext(AuthContext);

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
                console.log('WYLogoWANO');
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
      <Search />
      <Chats
        username="janek"
        img="https://source.unsplash.com/random"
        lastMessage="brudka"
      />
      <Chats
        username="janek"
        img="https://source.unsplash.com/random"
        lastMessage="brudka"
      />
      <Chats
        username="janek"
        img="https://source.unsplash.com/random"
        lastMessage="brudka"
      />
      <Chats
        username="janek"
        img="https://source.unsplash.com/random"
        lastMessage="brudka"
      />
      <Chats
        username="janek"
        img="https://source.unsplash.com/random"
        lastMessage="brudka"
      />
    </div>
  );
};

export default Sidebar;
