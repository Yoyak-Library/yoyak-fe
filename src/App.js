import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import SignUp from './pages/login/signup';
import HOME from './pages/home/home';

function App() {
  return (
    <Router>
      <Routes>
        {/*로그인*/}
        <Route path="/" element={<Login />} />
        {/*회원가입*/}
        <Route path="/signup" element={<SignUp />}/>
        {/*홈*/}
        <Route path="/home" element={<HOME />}/>
      </Routes>
    </Router>
  );
}

export default App;
