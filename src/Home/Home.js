
import React from 'react';
import Header from '../Header/Header';
import FeaturesSection from './FeaturesSection';
import Modal from './Modal';
import Banner from './Banner';
import MainSection from './MainSection';
import Footer from '../Footer/Footer';

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
