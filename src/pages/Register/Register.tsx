import styles from './Register.module.scss';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage } from '../../Firebase';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Register = () => {
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log((e.currentTarget[0] as HTMLInputElement).value);
    const username = (e.currentTarget[0] as HTMLInputElement).value;
    const email = (e.currentTarget[1] as HTMLInputElement).value;
    const password = (e.currentTarget[2] as HTMLInputElement).value;
    const file = (e.currentTarget[4] as HTMLInputElement).value;

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, username);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        // (error: any) => {
        //   setError(String(error));
        // },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile((await res).user, {
              displayName: username,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      setError(String(error));
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="E-mail" />
        <input type="new-password" placeholder="Password" />
        <input type="new-password" placeholder="Confirm password" />
        <input type="file" />
        <button>Sign Up</button>
        {error !== '' && <span>Something went wrong</span>}
      </form>
    </div>
  );
};

export default Register;
