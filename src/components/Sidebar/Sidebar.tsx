import { signOut } from 'firebase/auth';
import Chats from './Chats/Chats';
import Search from './Search.tsx/Search';
import styles from './Sidebar.module.scss';
import { auth } from '../../Firebase';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <button onClick={() => signOut(auth)}>Logout</button>
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
