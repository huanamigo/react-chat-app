import styles from './Message.module.scss';

interface IProps {
  messageText: string;
  time: string;
}

const Message = ({ messageText, time }: IProps) => {
  return (
    <div className={styles.container}>
      <span>{messageText}</span>
      <span className={styles.time}>{time}</span>
    </div>
  );
};

export default Message;
