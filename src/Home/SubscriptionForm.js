// src/SubscriptionForm.js

import React, { useState } from 'react';

function SubscriptionForm() {
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setSubmitting(true);

            const response = await fetch('http://localhost:5000/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Ошибка при добавлении email');
            }

            alert('Email успешно добавлен в базу данных!');
            setEmail('');
            setErrorMessage('');
        } catch (error) {
            console.error('Ошибка:', error);
            setErrorMessage('Произошла ошибка при добавлении email');
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <article className="box1 excerpt">
            <div className="subscription-form">
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" value={email} onChange={handleChange} placeholder="Введите ваш email" required />
                    <button type="submit" className="button icon fa-file" disabled={submitting}>
                        {submitting ? 'Отправка...' : 'Подписаться'}
                    </button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </article>
    );
}

export default SubscriptionForm;
