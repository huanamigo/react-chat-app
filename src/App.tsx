import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

interface ProtectedRouteProps {
  outlet: JSX.Element;
}

function App() {
  const { currentUser, isLoading } = useContext(AuthContext);
  console.log(currentUser);
  console.log(isLoading);

  if (isLoading) {
    return <div className={styles.loadingScreen}>Loading...</div>;
  }

  const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
    // ????????????????//
    if ('email' in currentUser) {
      return outlet;
    } else {
      return <Navigate to={{ pathname: '/login' }} />;
    }
  };

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<ProtectedRoute outlet={<Home />} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
