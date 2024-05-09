import styles from './Chat.module.scss';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

const Chat = () => {
  return (
    <div className={styles.container}>
      <Message messageText="11111 1111 1111 1111111 1 111" time="15:40" />
      <Message messageText="22222222222222222222" time="15:40" />
      <Message messageText="333333 3333333 3333333333 3333333 333" time="15:40" />
      <Message messageText="444 44444 444 44444  44" time="15:40" />
      <Message messageText="5555 5555555 5555 5555 555 5555" time="15:40" />
      <Message messageText="55555555555555555555555555555555555555" time="15:40" />
      <MessageInput />
    </div>
  );
};

export default Chat;
