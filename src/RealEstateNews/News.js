import React, { useEffect } from 'react';
import NewsComponent from './NewsComponent';
import ImgAssets from '../../src/assets/imgAssets';

const News = () => {
    const newsData = [
        {
            title: 'Найдена компания, которая построит спортивную арену за 19 миллиардов рублей',
            image: ImgAssets.pic11,
            description: 'Контракт ны группа возвела более.'
        },
        {
            title: 'На бывшем участке ритейлера «Виват» строят новый торговый центр',
            image: ImgAssets.pic22,
            description: 'В микри «Виват».'
        },
        {
            title: 'Застройщики больше запускают жилья, но меньше сдают',
            image: ImgAssets.pic33,
            description: 'Инвестированиев.'
        },
        {
            title: 'Дешевой ипотеки не будет. Снижение цен - единственный инструмент для активизации спроса на жилье',
            image: ImgAssets.pic44,
            description: 'Долгое к.'
        },
        {
            title: '«Хочу в Бечичи!». Выбираем квартиру на курорте в Черногории',
            image: ImgAssets.pic55,
            description: 'Дорога из .'
        },
        {
            title: 'Какую долю спроса потеряет первичный рынок жилья после 1 июля?',
            image: ImgAssets.pic66,
            description: 'После 1.'
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