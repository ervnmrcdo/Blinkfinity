import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar> </Navbar>
      </Router>
    </>
  );
}

export default App;
