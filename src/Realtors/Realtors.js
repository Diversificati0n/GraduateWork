import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import MainSection from './MainSection';

function Realtors() {
    return (
        <div className="Realtors">
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

export default Realtors;
