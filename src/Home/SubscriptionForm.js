import React from 'react';

function SubscriptionForm() {
    return (
        <article className="box1 excerpt">
            <div className="subscription-form">
                <form action="javascript:void(0)" method="post"> {/* URL для обработки формы */}
                    <input type="email" name="email" placeholder="Введите ваш email" required />
                    <a href="javascript:void(0)" className="button icon fa-file">Подписаться</a>
                </form>
            </div>
        </article>
    );
}

export default SubscriptionForm;
