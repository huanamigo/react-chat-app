import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <input type="file" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
