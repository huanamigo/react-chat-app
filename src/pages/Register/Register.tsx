import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <input type="file" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
