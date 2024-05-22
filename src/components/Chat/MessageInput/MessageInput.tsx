import { useContext, useState } from 'react';
import styles from './MessageInput.module.scss';
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../../Firebase';
import { v4 as uuidv4 } from 'uuid';
import { ChatContext } from '../../../context/ChatContext';
import { AuthContext } from '../../../context/AuthContext';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const MessageInput = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File>();
  const { data }: models.IUserFromContext = useContext(ChatContext);
  const { currentUser }: models.IUser = useContext(AuthContext);

  const handleSend = async () => {
    console.log(file);
    if (file) {
      const storageRef = ref(storage, uuidv4());
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.log(String(error));
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            if (data?.chatId) {
              await updateDoc(doc(db, 'chats', data?.chatId), {
                messages: arrayUnion({
                  id: uuidv4(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: downloadURL,
                }),
              });
            }
          });
        }
      );

      if (currentUser.uid) {
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [data?.chatId + '.lastMessage']: {
            text,
          },
          [data?.chatId + '.date']: serverTimestamp(),
        });
      }

      if (data && data.user?.uid) {
        await updateDoc(doc(db, 'userChats', data.user?.uid), {
          [data?.chatId + '.lastMessage']: {
            text,
          },
          [data?.chatId + '.date']: serverTimestamp(),
        });
      }
      setFile(undefined);
      setText('');

      console.log(text);
    } else {
      console.log(data?.chatId);
      if (data?.chatId) {
        await updateDoc(doc(db, 'chats', data?.chatId), {
          messages: arrayUnion({
            id: uuidv4(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }

      if (currentUser.uid) {
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [data?.chatId + '.lastMessage']: {
            text,
          },
          [data?.chatId + '.date']: serverTimestamp(),
        });
      }

      if (data && data.user?.uid) {
        await updateDoc(doc(db, 'userChats', data.user?.uid), {
          [data?.chatId + '.lastMessage']: {
            text,
          },
          [data?.chatId + '.date']: serverTimestamp(),
        });
      }
      setText('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <label htmlFor="fileInput" className={styles.fileInputLabel}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#fff"
          >
            <path d="M640-520v-200h80v200h-80ZM440-244q-35-10-57.5-39T360-350v-370h80v476Zm30 164q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v300h-80v-300q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q25 0 47.5-6.5T560-186v89q-21 8-43.5 12.5T470-80Zm170-40v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z" />
          </svg>
        </label>
        <input
          className={styles.textInput}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="file"
          id="fileInput"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </div>
      <button className={styles.sendBtn} onClick={handleSend}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
        </svg>
      </button>
    </div>
  );
};

export default MessageInput;
