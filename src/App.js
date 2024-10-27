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
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
