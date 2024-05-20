import React, { useState } from 'react';
import ImgAssets from '../../src/assets/imgAssets';
import AgentComponent from './AgentComponent';

const AgentsContent = () => {
    // Состояние для отслеживания видимости контактов
    const [contactsVisible, setContactsVisible] = useState({
        1: false,
        2: false,
        3: false
    });

    // Функция для изменения состояния видимости контактов
    const toggleContacts = (id) => {
        setContactsVisible(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    // Данные об агентствах недвижимости
    const agentsData = [
        {
            id: 1,
            logo: ImgAssets.an1,
            city: 'Город1',
            email: 'email1@example.com',
            phone: '+1-234-567-8901'
        },
        {
            id: 2,
            logo: ImgAssets.an5,
            city: 'Город2',
            email: 'email2@example.com',
            phone: '+1-234-567-8902'
        },
        {
            id: 3,
            logo: ImgAssets.an3,
            city: 'Город3',
            email: 'email3@example.com',
            phone: '+1-234-567-8903'
        }
    ];

    return (
        <div id="content" className="col-8 col-12-medium">
            {agentsData.map(agent => (
                <AgentComponent
                    key={agent.id}
                    id={agent.id}
                    logo={agent.logo}
                    city={agent.city}
                    email={agent.email}
                    phone={agent.phone}
                    contactsVisible={contactsVisible}
                    toggleContacts={toggleContacts}
                />
            ))}
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
};

export default AgentsContent;
