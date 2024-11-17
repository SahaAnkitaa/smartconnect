import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Control from './components/Control';
import Diagnostics from './components/Diagnostics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/control" element={<Control />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


