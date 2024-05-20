import React from 'react';
import ImgAssets from '../../src/assets/imgAssets';

function CardComponent({ image, title, description }) {
    return (
        <div className="col-4 col-6-medium col-12-small">
            <section className="card">
                <a href="#" className="image featured"><img src={image} alt="картинка" /></a>
                <header>
                    <h3>{title}</h3>
                </header>
                <p>{description}</p>
            </section>
        </div>
    );
}

export default CardComponent;
