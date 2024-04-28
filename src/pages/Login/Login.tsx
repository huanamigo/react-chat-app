import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [error, setError] = useState('');
  const { setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;

    try {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        setError(String(error));
        throw error;
      }
      setIsLoading(true);
      navigate('../', { replace: true });
    } catch (error) {
      setError(String(error));
      throw error;
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
          <span className={styles.error}>Something went wrong {error}</span>
        )}
      </form>
      <p>
        Don't have an account? <NavLink to="/register">Sign Up</NavLink>
      </p>
    </div>
  );
};

export default Login;
