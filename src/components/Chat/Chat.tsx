import styles from './Chat.module.scss';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

const Chat = () => {
  return (
    <div className={styles.container}>
      <Message messageText="111111111111111111111111" time="15:40" />
      <Message messageText="22222222222222222222" time="15:40" />
      <Message messageText="333333333333333333333333333333333" time="15:40" />
      <Message messageText="444444444444444444" time="15:40" />
      <Message messageText="55555555555555555555555555" time="15:40" />
      <MessageInput />
    </div>
  );
};

export default Chat;
