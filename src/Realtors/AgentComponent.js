import React from 'react';
import ImgAssets from '../../src/assets/imgAssets';

const AgentComponent = ({ id, logo, description, email, phone, contactsVisible, toggleContacts }) => {
    return (
        <article className="box post">
            <header>
                <h2><a href="javascript:void(0)">{id === 1 ? 'Home Construction' : id === 2 ? 'Ремакс' : 'Real Estate'}</a></h2>
            </header>
            <div className="logo">
                <img className='AnLogo' src={logo} alt={`Логотип агентства ${id}`} />
                <p>{description}</p>
            </div>
            <ul className="actions">
                <li>
                    <button
                        className="button icon fa-file show-contacts show-contacts-button"
                        onClick={() => toggleContacts(id)}
                    >
                        {contactsVisible[id] ? 'Скрыть контакты' : 'Показать контакты'}
                    </button>
                </li>
            </ul>
            <div className="contacts" id={`contacts-${id}`} style={{ display: contactsVisible[id] ? 'block' : 'none' }}>
                <p>Электронная почта: {email}</p>
                <p>Телефон: {phone}</p>
            </div>
        </article>
    );
}

export default AgentComponent;
