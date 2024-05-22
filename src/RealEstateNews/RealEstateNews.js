import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainSection from './MainSection';


function RealEstateNews() {
    return (
        <div className="RealEstateNews">
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

export default RealEstateNews;
