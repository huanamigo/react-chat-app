import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
