import { useContext } from 'react';
import styles from './Message.module.scss';
import { AuthContext } from '../../../context/AuthContext';

interface IProps {
  messageText: string;
  time: string;
  senderId: string;
}

const Message = ({ messageText, time, senderId }: IProps) => {
  const { currentUser }: models.IUser = useContext(AuthContext);

  return (
    <>
      {currentUser.uid === senderId ? (
        <div className={`${styles.ownMessage} ${styles.container}`}>
          <span className={styles.time}>{time}</span>
          <p>{messageText}</p>
        </div>
      ) : (
        <div className={`${styles.container} ${styles.notMyMessage}`}>
          <p>{messageText}</p>
          <span className={styles.time}>{time}</span>
        </div>
      )}
    </>
  );
};

export default Message;
