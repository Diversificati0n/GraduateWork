import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import MortgageCalculator from './MortgageCalculator';
import Banner from '../Home/Banner';

function Calculator() {
    return (
        <div className="MortgageCalculator">
            <Header />
            <Banner />
            <MortgageCalculator />
            <Footer />
        </div>
    );
}

export default Calculator;
