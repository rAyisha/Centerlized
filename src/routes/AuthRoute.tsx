import { Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from '../module/auth/loginModule';
import UnProtectedRoutes from './UnProtectedRoutes';

const AuthRoute = () => {
  const token = Cookies.get('token');
  console.log(token);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path=""
        element={token ? <Navigate to="/" replace /> : <UnProtectedRoutes />}
      />
    </Routes>
  );
};

export default AuthRoute;
