import styles from './Register.module.scss';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import '../../Firebase';

const Register = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log((e.currentTarget[0] as HTMLInputElement).value);
    // const username = (e.currentTarget[0] as HTMLInputElement).value;
    const email = (e.currentTarget[1] as HTMLInputElement).value;
    const password = (e.currentTarget[2] as HTMLInputElement).value;
    // const file = (e.currentTarget[4] as HTMLInputElement).value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
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
      </form>
    </div>
  );
};

export default Register;
