import React, { useState } from 'react';

const AgentsContent = () => {
    // Состояние для отслеживания видимости контактов
    const [contactsVisible, setContactsVisible] = useState({
        1: false,
        2: false
    });

    // Функция для изменения состояния видимости контактов
    const toggleContacts = (id) => {
        setContactsVisible(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div id="content" className="col-8 col-12-medium">

            <article className="box post">
                <header>
                    <h2><a href="javascript:void(0)">Название агентства недвижимости 1</a></h2>
                </header>
                <div className="logo">
                    <img src="путь_к_логотипу_агентства_1" alt="Логотип агентства 1" />
                </div>
                <p>Город: Город1</p>
                <p>Описание: Описание агентства недвижимости 1</p>
                <a href="javascript:void(0)" className="image featured">
                    <img src="путь_к_изображению_агентства_1" alt="Изображение агентства 1" />
                </a>
                <ul className="actions">
                    <li>
                        <button
                            className="button icon fa-file show-contacts show-contacts-button"
                            onClick={() => toggleContacts(1)} // Изменил индекс на 1 для первой статьи
                        >
                            {contactsVisible[1] ? 'Скрыть контакты' : 'Показать контакты'}
                        </button>
                    </li>
                </ul>
                <div className="contacts" id={`contacts-1`} style={{ display: contactsVisible[1] ? 'block' : 'none' }}>
                    <p>Электронная почта: email1@example.com</p>
                    <p>Телефон: +1-234-567-8901</p>
                </div>
            </article>

            <article className="box post">
                <header>
                    <h2><a href="javascript:void(0)">Название агентства недвижимости 2</a></h2>
                </header>
                <div className="logo">
                    <img src="путь_к_логотипу_агентства_2" alt="Логотип агентства 2" />
                </div>
                <p>Город: Город2</p>
                <p>Описание: Описание агентства недвижимости 2</p>
                <a href="javascript:void(0)" className="image featured">
                    <img src="путь_к_изображению_агентства_2" alt="Изображение агентства 2" />
                </a>
                <ul className="actions">
                    <li>
                        <button
                            className="button icon fa-file show-contacts show-contacts-button"
                            onClick={() => toggleContacts(2)} // Изменил индекс на 2 для второй статьи
                        >
                            {contactsVisible[2] ? 'Скрыть контакты' : 'Показать контакты'}
                        </button>
                    </li>
                </ul>
                <div className="contacts" id={`contacts-2`} style={{ display: contactsVisible[2] ? 'block' : 'none' }}>
                    <p>Электронная почта: email2@example.com</p>
                    <p>Телефон: +1-234-567-8902</p>
                </div>
            </article>

            <article className="box post">
                <header>
                    <h2><a href="javascript:void(0)">Название агентства недвижимости 2</a></h2>
                </header>
                <div className="logo">
                    <img src="путь_к_логотипу_агентства_2" alt="Логотип агентства 2" />
                </div>
                <p>Город: Город3</p>
                <p>Описание: Описание агентства недвижимости 3</p>
                <a href="javascript:void(0)" className="image featured">
                    <img src="путь_к_изображению_агентства_3" alt="Изображение агентства 3" />
                </a>
                <ul className="actions">
                    <li>
                        <button
                            className="button icon fa-file show-contacts show-contacts-button"
                            onClick={() => toggleContacts(3)} // Изменил индекс на 3 для второй статьи
                        >
                            {contactsVisible[3] ? 'Скрыть контакты' : 'Показать контакты'}
                        </button>
                    </li>
                </ul>
                <div className="contacts" id={`contacts-3`} style={{ display: contactsVisible[3] ? 'block' : 'none' }}>
                    <p>Электронная почта: email2@example.com</p>
                    <p>Телефон: +1-234-567-8902</p>
                </div>
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
};

export default AgentsContent;
