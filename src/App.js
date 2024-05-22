import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import RealEstateNews from './RealEstateNews/RealEstateNews';
import MortgageCalculator from './MortgageСalculator/Calculator';
import Realtors from './Realtors/Realtors';

import './assets/main.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<RealEstateNews />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/realtors" element={<Realtors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
