// src/Home.js

import React from 'react';
import Header from './Header';
import FeaturesSection from './FeaturesSection';
import Modal from './Modal';
import Banner from './Banner';
import MainSection from './MainSection';
import Footer from './Footer';

function Home() {
    return (
        <div className="Home">
            <Header />
            <FeaturesSection />
            <Modal />
            <Banner />
            <MainSection />
            <Footer />
        </div>
    );
}

export default Home;
