import React, { useEffect } from 'react';
import NewsComponent from './NewsComponent';
import ImgAssets from '../../src/assets/imgAssets';

const News = () => {
    const newsData = [
        {
            title: 'Найдена компания, которая построит спортивную арену за 19 миллиардов рублей',
            image: ImgAssets.pic11,
            description: 'Контракт на строительство спортивной арены за 19 млрд рублей получило ООО «Групп», победитель закупки входит в группе «ТЭН», одно из направлений которой — строительство коммерческих и жилых зданий. За 30 лет работы группа возвела более.'
        },
        {
            title: 'На бывшем участке ритейлера «Виват» строят новый торговый центр',
            image: ImgAssets.pic22,
            description: 'В микрорайоне Краснова ведется строительство нового торгового центра. Ранее на этом участке находилась площадка сети «Виват».'
        },
        {
            title: 'Застройщики больше запускают жилья, но меньше сдают',
            image: ImgAssets.pic33,
            description: 'Инвестирование в офисные здания, торговые центры или склады обеспечивает стабильный денежный поток от аренды и долгосрочную прибыль. Выбирайте коммерческую недвижимость для диверсификации портфеля и максимизации доходов.'
        },
        {
            title: 'Дешевой ипотеки не будет. Снижение цен - единственный инструмент для активизации спроса на жилье',
            image: ImgAssets.pic44,
            description: 'Долгое время власти питали иллюзии, что чем ниже ипотечные ставки, тем доступнее жилье. Поэтому активно их субсидировали - в настоящее время в России действует шесть льготных программ, не считая военной ипотеки. Однако на практике все обернулось по принципу «хотели как лучше - получилось как всегда». Дешевая ипотека привела к всплеску спроса на жилье, не обеспеченному предложением, что позволило застройщикам быстро наращивать цены, нивелируя тем самым всю выгоду для покупателей от низких ставок.'
        },
        {
            title: '«Хочу в Бечичи!». Выбираем квартиру на курорте в Черногории',
            image: ImgAssets.pic55,
            description: 'Дорога из шумной Будвы в более размеренный Бечичи точно не покажется вам скучной! Конечно, если вы выберете пешеходный маршрут через двухсотметровый туннель, вырубленный в скале. Силами художников он превращён не только в галерею, но и в путеводитель по Черногории, а также самоучитель черногорского языка. К примеру, карта страны здесь остроумно представлена в виде коровы, а каждую букву алфавита иллюстрируют начинающиеся с неё топонимы: «Б – Будва».'
        },
        {
            title: 'Какую долю спроса потеряет первичный рынок жилья после 1 июля?',
            image: ImgAssets.pic66,
            description: 'После 1 июля 2024 года ставка по льготной ипотеке для семей с детьми старше шести лет может вырасти с 6% до 12%. Аудитория семейной ипотеки существенно расширилась в прошлом году, когда право пользоваться этим продуктом получили семьи с двумя несовершеннолетними детьми, родившимися ранее 2018 года. Рынок это сразу почувствовал, количество сделок с семейной ипотекой заметно выросло и в настоящее время доля семейной ипотеки составляет более 60% от общего количества ипотечных сделок.'
        }
    ];

    useEffect(() => {
        const perPage = 3;
        const articles = document.querySelectorAll(".box.post");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");
        function showNews(startIndex) {
            articles.forEach((article, index) => {
                if (index >= startIndex && index < startIndex + perPage) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
            if (startIndex + perPage >= articles.length) {
                nextBtn.style.display = "none";
            } else {
                nextBtn.style.display = "block";
            }
            if (startIndex === 0) {
                prevBtn.style.display = "none";
            } else {
                prevBtn.style.display = "block";
            }
        }
        showNews(0);
        let currentIndex = 0;
        document.getElementById("nextBtn").addEventListener("click", function (e) {
            e.preventDefault();
            currentIndex += perPage;
            showNews(currentIndex);
        });
        document.getElementById("prevBtn").addEventListener("click", function (e) {
            e.preventDefault();
            currentIndex -= perPage;
            if (currentIndex < 0) {
                currentIndex = 0;
            }
            showNews(currentIndex);
        });
    }, []);

    return (
        <div id="content" className="col-8 col-12-medium">
            {newsData.map((news, index) => (
                <NewsComponent
                    key={index}
                    title={news.title}
                    image={news.image}
                    description={news.description}
                />
            ))}
            <div className="col-4 col-12-medium">
                <ul id="pagination" className="actions">
                    <li><a href="javascript:void(0)" id="prevBtn" className="button icon fa-arrow-left">Назад</a></li>
                    <li><a href="javascript:void(0)" id="nextBtn" className="button icon fa-arrow-right">Далее</a></li>
                </ul>
            </div>
        </div>
    );
}

export default News;