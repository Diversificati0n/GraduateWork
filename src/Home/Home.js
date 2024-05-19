import React, { useEffect } from 'react';
import Header from './Header';
import FeaturesSection from './FeaturesSection';
import Modal from './Modal';
import Banner from './Banner';
import MainSection from './MainSection';
import Footer from './Footer';

function Home() {
    useEffect(() => {
        const modal = document.getElementById('modal');
        const closeModalButton = document.querySelector('.close');
        const cards = document.querySelectorAll('.card');
        const phoneInput = document.getElementById('phone');

        const handleCardClick = (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке
            modal.style.display = 'block';
        };

        const handleCloseModal = () => {
            modal.style.display = 'none';
        };

        const handleWindowClick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

        const handlePhoneInput = (event) => {
            phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
        };

        cards.forEach(card => {
            card.addEventListener('click', handleCardClick);
        });

        if (closeModalButton) {
            closeModalButton.addEventListener('click', handleCloseModal);
        }

        window.addEventListener('click', handleWindowClick);

        if (phoneInput) {
            phoneInput.addEventListener('input', handlePhoneInput);
        }

        // Cleanup event listeners on component unmount
        return () => {
            cards.forEach(card => {
                card.removeEventListener('click', handleCardClick);
            });
            if (closeModalButton) {
                closeModalButton.removeEventListener('click', handleCloseModal);
            }
            window.removeEventListener('click', handleWindowClick);
            if (phoneInput) {
                phoneInput.removeEventListener('input', handlePhoneInput);
            }
        };
    }, []);

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
