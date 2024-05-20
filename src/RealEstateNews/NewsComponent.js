import React from 'react';
import ImgAssets from '../../src/assets/imgAssets';

function NewsComponent({ title, image, description }) {
    return (
        <article className="box post">
            <header>
                <h2><a href="javascript:void(0)">{title}</a></h2>
            </header>
            <a href="javascript:void(0)" className="image featured"><img src={image} alt="картинка" /></a>
            <p>{description}</p>
        </article>
    );
}

export default NewsComponent;
