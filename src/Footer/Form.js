
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Сообщение успешно отправлено!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Ошибка при отправке сообщения');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    return (
        <div className="col-6 col-12-medium">
            <section>
                <form method="post" action="#" onSubmit={handleSubmit}>
                    <div className="row gtr-50">
                        <div className="col-6 col-12-small">
                            <input
                                name="name"
                                placeholder="Имя"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-6 col-12-small">
                            <input
                                name="email"
                                placeholder="Email"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12">
                            <textarea
                                name="message"
                                placeholder="Сообщение"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="form-button-submit button icon fa-envelope">Отправить сообщение</button>
                        </div>
                        {successMessage && (
                            <div className="col-12">
                                <p>{successMessage}</p>
                            </div>
                        )}
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Form;
