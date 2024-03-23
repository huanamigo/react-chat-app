import Chats from './Chats/Chats';
import Search from './Search.tsx/Search';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.container}>
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
