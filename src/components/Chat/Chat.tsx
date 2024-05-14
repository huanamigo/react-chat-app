import { useContext } from 'react';
import styles from './Chat.module.scss';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';
import { ChatContext } from '../../context/ChatContext';

interface IUserFromContext {
  data?: {
    user?: {
      photoURL?: string;
      displayName?: string;
      uid?: string;
    };
  };
}

const Chat = () => {
  const { data }: IUserFromContext = useContext(ChatContext);

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        {data?.user ? (
          <>
            <img src={data.user.photoURL} alt="User photo" />
            <p>{data.user.displayName}</p>
          </>
        ) : (
          <p>USER NOT FOUND</p>
        )}
      </div>
      <div className={styles.messageWrapper}>
        <Message messageText="11111 1111 1111 1111111 1 111" time="15:40" />
        <Message messageText="22222222222222222222" time="15:40" />
        <Message
          messageText="333333 3333333 3333333333 3333333 333"
          time="15:40"
        />
        <Message messageText="444 44444 444 44444  44" time="15:40" />
        <Message messageText="5555 5555555 5555 5555 555 5555" time="15:40" />
        <Message
          messageText="55555555555555555555555555555555555555"
          time="15:40"
        />
        <MessageInput />
      </div>
    </div>
  );
};

export default Chat;
