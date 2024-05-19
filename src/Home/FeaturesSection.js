import React from 'react';
import ImgAssets from '../../src/assets/imgAssets';

function FeaturesSection() {
    return (
        <section id="features">
            <div className="container">
                <header>
                    <h2>Куда инвестировать в недвижимость в 2024 году?</h2>
                </header>
                <div className="row aln-center">

                    <div className="col-4 col-6-medium col-12-small">
                        {/* карточка 1 */}
                        <section className="card" data-card="1">
                            <a href="#" className="image featured"><img src={ImgAssets.pic01} alt="картинка" /></a>
                            <header>
                                <h3>Новостройки: лучшие возможности для инвестиций в 2024 году</h3>
                            </header>
                            <p>описание Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam eum libero aliquam? Unde fugit impedit dolores nobis sit commodi, fuga, quia voluptate, saepe quasi cumque sint aliquam libero quis.</p>
                        </section>
                    </div>

                    <div className="col-4 col-6-medium col-12-small">
                        {/* карточка 2 */}
                        <section className="card" data-card="2">
                            <a href="#" className="image featured"><img src={ImgAssets.pic02} alt="картинка" /></a>
                            <header>
                                <h3>Загородные дома: выбор места и тренды инвестирования</h3>
                            </header>
                            <p>описание Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam eum libero aliquam? Unde fugit impedit dolores nobis sit commodi, fuga, quia voluptate, saepe quasi cumque sint aliquam libero quis.</p>
                        </section>
                    </div>

                    <div className="col-4 col-6-medium col-12-small">
                        {/* карточка 3 */}
                        <section className="card" data-card="3">
                            <a href="#" className="image featured"><img src={ImgAssets.pic03} alt="картинка" /></a>
                            <header>
                                <h3>Коммерческая недвижимость: ключевые секторы</h3>
                            </header>
                            <p>описание Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam eum libero aliquam? Unde fugit impedit dolores nobis sit commodi, fuga, quia voluptate, saepe quasi cumque sint aliquam libero quis.</p>
                        </section>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
