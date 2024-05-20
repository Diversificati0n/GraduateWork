import React from 'react';
import ImgAssets from '../../src/assets/imgAssets';

function CharityInfo() {
    return (
        <article className="box excerpt">
            <header>
                <h3 className='SidebarGL'><a href="https://podari-zhizn.ru/ru">Подари жизнь</a></h3>
            </header>
            <a href="https://podari-zhizn.ru/ru" className="image left"><img src={ImgAssets.pz} alt="картинка" /></a>
            <p>Наша миссия заключается в спасении жизней и улучшении качества жизни тех, кто нуждается в трансплантации.</p>
            <ul className="actions">
                <li><a href="https://podari-zhizn.ru/ru" className="button icon fa-file">Подари жизнь</a></li>
            </ul>
        </article>
    );
}

export default CharityInfo;
