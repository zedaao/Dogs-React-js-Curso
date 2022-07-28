import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import Login from './Componets/Login/Login';
import { UserStorage } from './UserContext';
import User from './Componets/User/User';
import ProtectedRoute from './Componets/Helper/ProtectedRoute';
import Photo from './Componets/Photo/Photo';
import UserProfile from './Componets/User/UserProfile';
import NotFound from './Componets/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
