
import React from 'react';
import ContactInfo from './ContactInfo';
import Form from './Form';

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <header>
                    <h2>Вопросы или комментарии? <strong>Связаться:</strong></h2>
                </header>
                <div className="row">
                    <ContactInfo />
                    <Form />
                </div>
            </div>
            <div id="copyright" className="container">
                <ul className="links">
                    <li>При использовании материалов гиперссылка на сайт обязательна <br /> &copy; 2020 - 2024 Portal.ru</li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;