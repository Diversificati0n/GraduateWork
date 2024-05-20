// src/ContactInfo.js

import React from 'react';

const ContactInfo = () => {
    return (
        <div className="col-6 col-12-medium">
            <section>
                <p>Мы готовы выслушать вас и ответить на ваши вопросы, предложения и комментарии. Мы ценим ваше мнение и готовы помочь вам в любых вопросах, связанных с недвижимостью.</p>
                <div className="row">
                    <div className="col-6 col-12-small">
                        <ul className="icons">
                            <li className="icon fa-home">
                                Город<br />
                                улица, дом, офис
                            </li>
                            <li className="icon fa-phone">
                                + 0 (000) 000-00-00
                            </li>
                            <li className="icon fa-envelope">
                                <a href="mailto:info@mail.ru">
                                    info@mail.ru
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-12-small">
                        <ul className="icons">
                            <li className="icon fa-twitter">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                            <li className="icon fa-instagram">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactInfo;
