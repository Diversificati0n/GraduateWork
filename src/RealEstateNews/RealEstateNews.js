import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainSection from './MainSection';


function RealEstateNews() {
    useEffect(() => {
        function showNews() {
            const articles = document.querySelectorAll(".box.post");
            const perPage = 3;
            articles.forEach(article => {
                article.style.display = "none";
            });
            for (let i = 0; i < perPage; i++) {
                if (articles[i]) {
                    articles[i].style.display = "block";
                }
            }
        }

        showNews();
        document.getElementById("nextBtn").addEventListener("click", function (e) {
            e.preventDefault();
            const articles = document.querySelectorAll(".box.post");
            const perPage = 3;
            let currentIndex = perPage;

            articles.forEach(article => {
                article.style.display = "none";
            });

            for (let i = currentIndex; i < currentIndex + perPage; i++) {
                if (articles[i]) {
                    articles[i].style.display = "block";
                }
            }
        });

        document.getElementById("prevBtn").addEventListener("click", function (e) {
            e.preventDefault();
            const articles = document.querySelectorAll(".box.post");
            const perPage = 3;
            let currentIndex = 0;

            articles.forEach(article => {
                article.style.display = "none";
            });

            for (let i = currentIndex; i < currentIndex + perPage; i++) {
                if (articles[i]) {
                    articles[i].style.display = "block";
                }
            }
        });
    }, []);

    return (
        <div className="RealEstateNews">
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

export default RealEstateNews;
