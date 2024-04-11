import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;

    try {
      try {
        signInWithEmailAndPassword(auth, email, password);
        console.log('udalo sie zalogowac');
      } catch (error) {
        setError(String(error));
        console.log(error);
      }
      navigate('../', { replace: true });
      console.log('przenosze na homepage');
    } catch (error) {
      setError(String(error));
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" autoComplete="email" placeholder="E-mail" />
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Password"
        />
        <button>Login</button>
        {error !== '' && (
          <span className={styles.error}>Something went wrong</span>
        )}
      </form>
      <p>
        Don't have an account? <NavLink to="/register">Sign Up</NavLink>
      </p>
    </div>
  );
};

export default Login;
