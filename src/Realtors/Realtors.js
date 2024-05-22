import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
