import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserContext from '../../UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordReset from './LoginPasswordReset';
import LonginPasswordLost from './LonginPasswordLost';
import styles from './Login.module.css';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LonginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
