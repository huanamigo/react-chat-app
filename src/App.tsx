import styles from './App.module.scss';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className={styles.container}>
      <Register />
      <Home />
    </div>
  );
}

export default App;
