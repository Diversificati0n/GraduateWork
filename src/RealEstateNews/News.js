import React from 'react';
import ImgAssets from '../../src/assets/imgAssets';


const News = () => {
    return (
        <div id="content" className="col-8 col-12-medium">

            <article className="box post">
                <header>
                    <h2><a href="javascript:void(0)">Найдена компания, которая построит спортивную арену за 19 миллиардов рублей</a></h2>
                </header>
                <a href="javascript:void(0)" className="image featured"><img src={ImgAssets.pic04} alt="картинка" /></a>
                <h3>В аукционе участвовала только одна компания.</h3>
                <p>Контракт на строительство спортивной арены за 19 млрд рублей получило ООО
                    «Групп», победитель закупки входит в группе «ТЭН», одно из направлений которой
                    — строительство коммерческих и жилых зданий. За 30 лет работы группа возвела более
                </p>
            </article>
            
            <article className="box post">
                <header>
                    <h2><a href="javascript:void(0)">На бывшем участке ритейлера «Виват» строят новый торговый центр</a></h2>
                </header>
                <a href="javascript:void(0)" className="image featured"><img src={ImgAssets.pic05} alt="картинка" /></a>
                <h3>Разрешение на строительство было выдано в 2022 году.</h3>
                <p>В микрорайоне Краснова ведется строительство нового торгового центра.
                    Ранее на этом участке находилась площадка сети «Виват».
                </p>
            </article>

            <article className="box post">
                <header>
                    <h2><a href="javascript:void(0)">На бывшем участке ритейлера «Виват» строят новый торговый центр</a></h2>
                </header>
                <a href="javascript:void(0)" className="image featured"><img src={ImgAssets.pic04} alt="картинка" /></a>
                <h3>Разрешение на строительство было выдано в 2022 году.</h3>
                <p>В микрорайоне Краснова ведется строительство нового торгового центра.
                    Ранее на этом участке находилась площадка сети «Виват».
                </p>
            </article>

            <article className="box post">
                <header>
                    <h2><a href="javascript:void(0)">На бывшем участке ритейлера «Виват» строят новый торговый центр</a></h2>
                </header>
                <a href="javascript:void(0)" className="image featured"><img src={ImgAssets.pic05} alt="картинка" /></a>
                <h3>Разрешение на строительство было выдано в 2022 году.</h3>
                <p>В микрорайоне Краснова ведется строительство нового торгового центра.
                    Ранее на этом участке находилась площадка сети «Виват».
                </p>
            </article>

            <article className="box post">
                <header>
                    <h2><a href="javascript:void(0)">На бывшем участке ритейлера «Виват» строят новый торговый центр</a></h2>
                </header>
                <a href="javascript:void(0)" className="image featured"><img src={ImgAssets.pic04} alt="картинка" /></a>
                <h3>Разрешение на строительство было выдано в 2022 году.</h3>
                <p>В микрорайоне Краснова ведется строительство нового торгового центра.
                    Ранее на этом участке находилась площадка сети «Виват».
                </p>
            </article>

            <article className="box post">
                <header>
                    <h2><a href="javascript:void(0)">Найдена компания, которая построит спортивную арену за 19 миллиардов рублей</a></h2>
                </header>
                <a href="javascript:void(0)" className="image featured"><img src={ImgAssets.pic04} alt="картинка" /></a>
                <h3>В аукционе участвовала только одна компания.</h3>
                <p>Контракт на строительство спортивной арены за 19 млрд рублей получило ООО
                    «Групп», победитель закупки входит в группе «ТЭН», одно из направлений которой
                    — строительство коммерческих и жилых зданий. За 30 лет работы группа возвела более
                </p>
            </article>
            
            {/* Пагинация */}
            <div className="col-4 col-12-medium">
                <ul id="pagination" className="actions">
                    {/* Кнопка "Назад" */}
                    <li><a href="javascript:void(0)" id="prevBtn" className="button icon fa-arrow-left">Назад</a></li>
                    {/* Кнопка "Далее" */}
                    <li><a href="javascript:void(0)" id="nextBtn" className="button icon fa-arrow-right">Далее</a></li>
                </ul>
            </div>
        </div>
    );
}

export default News;
