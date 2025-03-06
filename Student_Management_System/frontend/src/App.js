
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
//import LoginPage from "./components/LoginPage";
import LoginPage from "./pages/login/LoginPage";
import AppLayout from "./components/AppLayout/AppLayout";
import ProfileSection from './components/Profile/ProfileSection';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserType(null);
  };



  return (
    <Router>
        <Routes>
          {/* <Route
            path="/login"
            element={!loggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/users" />}
          /> */}
          <Route path='/login' element={<LoginPage onLogin={handleLogin}/>}/>
          <Route
            path="/users"
            element={
              loggedIn ? (
                <AppLayout userType={userType} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/profile" element={<ProfileSection/>}/>
        </Routes>
    </Router>
  );
}

export default App;