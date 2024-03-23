import styles from './Chat.module.scss';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

const Chat = () => {
  return (
    <div className={styles.container}>
      <Message messageText="jeden" />
      <Message messageText="dwa" />
      <Message messageText="trzy" />
      <Message messageText="cztery" />
      <MessageInput />
    </div>
  );
};

export default Chat;
