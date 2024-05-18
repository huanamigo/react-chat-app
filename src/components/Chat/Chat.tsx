import { useContext, useEffect, useState } from 'react';
import styles from './Chat.module.scss';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';
import { ChatContext } from '../../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';

const Chat = () => {
  const { data }: models.IUserFromContext = useContext(ChatContext);

  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (data?.chatId) {
      const unsub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
        console.log(doc.data());
      });

      return () => {
        unsub();
      };
    }
  }, [data?.chatId]);

  return (
    <div className={styles.container}>
      {data?.chatId !== '' ? (
        <>
          <div className={styles.topbar}>
            {data?.user ? (
              <>
                <img
                  src={data.user.photoURL}
                  alt="User photo"
                  onClick={() => console.log(data.user)}
                />
                <p>{data.user.displayName}</p>
              </>
            ) : (
              <p>USER NOT FOUND</p>
            )}
          </div>
          <div className={styles.messageWrapper}>
            {messages.length < 0 &&
              messages.map((m) => <Message messageText={m} time="15:40" />)}

            <MessageInput />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Chat;
