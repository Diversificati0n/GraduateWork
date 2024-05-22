
import React, { useState } from 'react';

const Modal = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact-modal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Данные успешно отправлены!');
                setFormData({ name: '', phone: '' });
            } else {
                console.error('Ошибка при отправке данных');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleWindowClick = (event) => {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    };

    const handlePhoneInput = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };

    return (
        <div id="modal" className={`modal ${modalVisible ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Заказать звонок</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Имя:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="phone">Телефон:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onInput={handlePhoneInput}
                        required
                    />
                    <input type="submit" value="Отправить" />
                </form>
                {successMessage && <p>{successMessage}</p>}
            </div>
        </div>
    );
};

export default Modal;
