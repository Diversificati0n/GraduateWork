// import React, { useState } from 'react';
import ImgAssets from '../../src/assets/imgAssets';
import AgentComponent from './AgentComponent';
import React, { useState, useEffect } from 'react';

const AgentsContent = () => {
    const [contactsVisible, setContactsVisible] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    });

    const toggleContacts = (id) => {
        setContactsVisible(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const agentsData = [
        {
            id: 1,
            logo: ImgAssets.an1,
            email: 'email1@example.com',
            phone: '+1-234-567-8901',
            description: 'Агентство недвижимости ',
        },
        {
            id: 2,
            logo: ImgAssets.an5,
            email: 'email2@example.com',
            phone: '+1-234-567-8902',
            description: 'Агентство недвижимости ',
        },
        {
            id: 3,
            logo: ImgAssets.an3,
            email: 'email3@example.com',
            phone: '+1-234-567-8903',
            description: 'Агентство недвижимости ',
        },
        {
            id: 4,
            logo: ImgAssets.an7,
            email: 'email4@example.com',
            phone: '+1-234-567-8904',
            description: 'Агентство недвижимости ',
        },
        {
            id: 5,
            logo: ImgAssets.an8,
            email: 'email5@example.com',
            phone: '+1-234-567-8905',
            description: 'Агентство недвижимости',
        },
        {
            id: 6,
            logo: ImgAssets.an9,
            email: 'email6@example.com',
            phone: '+1-234-567-8906',
            description: 'Агентство недвижимости',
        }
    ];

    useEffect(() => {
        const perPage = 3;
        const articles = document.querySelectorAll(".box.post");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");
        function showAgents(startIndex) {
            articles.forEach((article, index) => {
                if (index >= startIndex && index < startIndex + perPage) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
            // Проверяем, остались ли еще элементы для показа
            if (startIndex + perPage >= articles.length) {
                nextBtn.style.display = "none"; // Скрываем кнопку "Далее"
            } else {
                nextBtn.style.display = "block"; // Показываем кнопку "Далее"
            }
            // Проверяем, находимся ли мы на первой странице
            if (startIndex === 0) {
                prevBtn.style.display = "none"; // Скрываем кнопку "Назад"
            } else {
                prevBtn.style.display = "block"; // Показываем кнопку "Назад"
            }
        }
        showAgents(0);
        let currentIndex = 0;
        document.getElementById("nextBtn").addEventListener("click", function (e) {
            e.preventDefault();
            currentIndex += perPage;
            showAgents(currentIndex);
        });
        document.getElementById("prevBtn").addEventListener("click", function (e) {
            e.preventDefault();
            currentIndex -= perPage;
            if (currentIndex < 0) {
                currentIndex = 0;
            }
            showAgents(currentIndex);
        });
    }, []);

    return (
        <div id="content" className="col-8 col-12-medium">
            {agentsData.map(agent => (
                <AgentComponent
                    key={agent.id}
                    id={agent.id}
                    logo={agent.logo}
                    description={agent.description}
                    email={agent.email}
                    phone={agent.phone}
                    contactsVisible={contactsVisible}
                    toggleContacts={toggleContacts}
                />
            ))}
            {/* Переход */}
            <div className="col-4 col-12-medium">
                <ul id="pagination" className="actions">
                    {/* назад */}
                    <li><a href="javascript:void(0)" id="prevBtn" className="button icon fa-arrow-left">Назад</a></li>
                    {/* далее */}
                    <li><a href="javascript:void(0)" id="nextBtn" className="button icon fa-arrow-right">Далее</a></li>
                </ul>
            </div>
        </div>
    );
};

export default AgentsContent;
