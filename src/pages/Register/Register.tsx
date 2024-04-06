import styles from './Register.module.scss';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../../Firebase';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const displayName = (e.currentTarget[0] as HTMLInputElement).value;
    const email = (e.currentTarget[1] as HTMLInputElement).value;
    const password = (e.currentTarget[2] as HTMLInputElement).value;
    const fileInput = e.currentTarget[4] as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;

    console.log(displayName);
    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      if (file) {
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
            setError(String(error));
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateProfile((await res).user, {
                  displayName,
                  photoURL: downloadURL,
                });

                await setDoc(doc(db, 'users', (await res).user.uid), {
                  uid: (await res).user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                });
                await setDoc(doc(db, 'userChats', (await res).user.uid), {});
                navigate('../', { replace: true });
              }
            );
          }
        );
      }
    } catch (error) {
      setError(String(error));
      console.log(error);
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
        {error !== '' && (
          <span className={styles.error}>Something went wrong</span>
        )}
      </form>
      <p>
        Already have an account? <NavLink to="/login">Log In</NavLink>
      </p>
    </div>
  );
};

export default Register;
