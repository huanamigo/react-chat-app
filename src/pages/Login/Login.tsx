import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <p>
        Don't have an account? <NavLink to="/register">Sign Up</NavLink>
      </p>
    </div>
  );
};

export default Login;
