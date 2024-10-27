import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <video className="background-video" src='videos/home_bg.mp4' autoPlay loop muted />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;