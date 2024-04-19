import styles from './Chats.module.scss';

interface IProps {
  username: string;
  img: string;
  lastMessage: string;
  isSearched?: boolean;
}

const Chats = ({ username, img, lastMessage, isSearched }: IProps) => {
  return (
    <div className={styles.container}>
      <img src={img} />
      <div className={styles.wrapper}>
        {isSearched ? (
          <p className={styles.username}>{username}</p>
        ) : (
          <>
            <p className={styles.username}>{username}</p>
            <p className={styles.message}>{lastMessage}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Chats;
