import styles from './Chats.module.scss';

interface IProps {
  username: string;
  img: string;
  lastMessage: string;
}

const Chats = ({ username, img, lastMessage }: IProps) => {
  return (
    <div className={styles.container}>
      <img src={img} />
      <div className={styles.wrapper}>
        <p className={styles.username}>{username}</p>
        <p className={styles.message}>{lastMessage}</p>
      </div>
    </div>
  );
};

export default Chats;
