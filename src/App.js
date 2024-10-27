import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Upload from './components/pages/Upload';
import Footer from './components/pages/Footer';
import Rocketblink from './components/pages/Rocketblink';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/rocketblink' element={<Rocketblink />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
