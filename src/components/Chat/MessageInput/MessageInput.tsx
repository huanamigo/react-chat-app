import { useState } from 'react';
import styles from './MessageInput.module.scss';

const MessageInput = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File>();

  const handleSend = () => {
    console.log(text);
    console.log(file);
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <input
        className={styles.textInput}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend}></button>
    </div>
  );
};

export default MessageInput;
