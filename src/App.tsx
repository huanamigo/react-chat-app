import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

interface ProtectedRouteProps {
  authenticationPath: string;
  outlet: JSX.Element;
}

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute = ({
    authenticationPath,
    outlet,
  }: ProtectedRouteProps) => {
    // ????????????????//
    if ('email' in currentUser) {
      return outlet;
    } else {
      return <Navigate to={{ pathname: authenticationPath }} />;
    }
  };

  return (
    <div className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute authenticationPath="/login" outlet={<Home />} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
