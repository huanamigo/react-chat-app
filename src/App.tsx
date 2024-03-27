import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
