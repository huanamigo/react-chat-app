import { useContext } from 'react';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Home.module.scss';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { currentUser, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div className={styles.loadingScreen}>
        <span className={styles.loader}></span>
      </div>
    );
  } else if ('email' in currentUser) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Sidebar />
          <Chat />
        </div>
      </div>
    );
  } else {
    return <Navigate to={{ pathname: '/login' }} />;
  }
};

export default Home;
