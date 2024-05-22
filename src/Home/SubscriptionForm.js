import React, { useState } from 'react';

function SubscriptionForm() {
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

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

            setSuccessMessage('Подписка оформлена!');
            setEmail('');
            setErrorMessage('');

            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);

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
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Введите ваш email"
                        required
                    />
                    <button type="submit" className="button icon fa-file" disabled={submitting}>
                        {submitting ? 'Отправка...' : 'Подписаться'}
                    </button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && (
                    <div className="success-message">
                        <p>{successMessage}</p>
                    </div>
                )}
            </div>
        </article>
    );
}

export default SubscriptionForm;
