import styles from './Message.module.scss';

interface IProps {
  messageText: string;
}

const Message = ({ messageText }: IProps) => {
  return (
    <div className={styles.container}>
      <p>{messageText}</p>
    </div>
  );
};

export default Message;
