import React from 'react';

function Modal() {
    return (
        <div id="modal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <h2>Заказать звонок</h2>
                <form>
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="phone">Телефон:</label>
                    <input type="tel" id="phone" name="phone" required />
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        </div>
    );
}

export default Modal;
