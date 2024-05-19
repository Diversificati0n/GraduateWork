import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import MainSection from './MainSection';


function RealEstateNews() {
    useEffect(() => {
        // Функция для отображения новостей
        function showNews() {
            const articles = document.querySelectorAll(".box.post");
            const perPage = 3;

            // Скрываем все новости
            articles.forEach(article => {
                article.style.display = "none";
            });

            // Отображаем новости
            for (let i = 0; i < perPage; i++) {
                if (articles[i]) {
                    articles[i].style.display = "block";
                }
            }
        }

        // Показываем первые новости при загрузке страницы
        showNews();

        // Обработчик события для кнопки "Далее"
        document.getElementById("nextBtn").addEventListener("click", function (e) {
            e.preventDefault();
            // Увеличиваем индекс, чтобы отобразить следующие новости
            const articles = document.querySelectorAll(".box.post");
            const perPage = 3;
            let currentIndex = perPage;

            articles.forEach(article => {
                article.style.display = "none";
            });

            // Отображаем следующие новости
            for (let i = currentIndex; i < currentIndex + perPage; i++) {
                if (articles[i]) {
                    articles[i].style.display = "block";
                }
            }
        });

        // Обработчик события для кнопки "Назад"
        document.getElementById("prevBtn").addEventListener("click", function (e) {
            e.preventDefault();
            // Уменьшаем индекс, чтобы отобразить предыдущие новости
            const articles = document.querySelectorAll(".box.post");
            const perPage = 3;
            let currentIndex = 0;

            articles.forEach(article => {
                article.style.display = "none";
            });

            // Отображаем предыдущие новости
            for (let i = currentIndex; i < currentIndex + perPage; i++) {
                if (articles[i]) {
                    articles[i].style.display = "block";
                }
            }
        });
    }, []); // Пустой массив зависимостей, чтобы функция useEffect выполнялась только один раз

    return (
        <div className="RealEstateNews">
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

export default RealEstateNews;
