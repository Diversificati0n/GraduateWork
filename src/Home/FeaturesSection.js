// src/FeaturesSection.js

import React, { useEffect } from 'react';
import CardComponent from './CardComponent';
import ImgAssets from '../../src/assets/imgAssets';

function FeaturesSection() {
    useEffect(() => {
        const modal = document.getElementById('modal');
        const cards = document.querySelectorAll('.card');
        const closeModalButton = document.querySelector('.close');

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

        cards.forEach(card => {
            card.addEventListener('click', handleCardClick);
        });

        if (closeModalButton) {
            closeModalButton.addEventListener('click', handleCloseModal);
        }

        window.addEventListener('click', handleWindowClick);

        // Cleanup event listeners on component unmount
        return () => {
            cards.forEach(card => {
                card.removeEventListener('click', handleCardClick);
            });
            if (closeModalButton) {
                closeModalButton.removeEventListener('click', handleCloseModal);
            }
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);

    return (
        <section id="features">
            <div className="container">
                <header>
                    <h2>Куда инвестировать в недвижимость в 2024 году?</h2>
                </header>
                <div className="row aln-center">
                    <CardComponent
                        image={ImgAssets.pic01}
                        title="Новостройки: лучшие возможности для инвестиций в 2024 году"
                        description="Современные квартиры в новостройках обладают высокой ликвидностью и ростом цен, что делает их привлекательным активом. Новостройки предлагают выгодные условия оплаты и разнообразные планировки, позволяя выбрать оптимальный вариант для аренды или перепродажи."
                    />
                    <CardComponent
                        image={ImgAssets.pic02}
                        title="Загородные дома: выбор места и тренды инвестирования"
                        description="Загородные дома предлагают уникальную возможность инвестировать в недвижимость с высокими перспективами роста. Эти дома не только предоставляют уединение и близость к природе, но и становятся все более востребованными, что делает их выгодным вложением."
                    />
                    <CardComponent
                        image={ImgAssets.pic03}
                        title="Коммерческая недвижимость: ключевые секторы"
                        description="Инвестирование в офисные здания, торговые центры или склады обеспечивает стабильный денежный поток от аренды и долгосрочную прибыль. Выбирайте коммерческую недвижимость для диверсификации портфеля и максимизации доходов."
                    />
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
