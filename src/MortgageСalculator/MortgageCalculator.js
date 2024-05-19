import React, { useEffect } from 'react';

function MortgageСalculator() {
    // Функция для расчета ежемесячного платежа
    const calculatePayment = (e) => {
        e.preventDefault();

        // Получаем входные значения
        const amount = parseFloat(document.getElementById("amount").value);
        const interest = parseFloat(document.getElementById("interest").value);
        const years = parseFloat(document.getElementById("years").value);

        // Рассчитываем ежемесячную процентную ставку и количество платежей
        const monthlyInterest = interest / 100 / 12;
        const payments = years * 12;

        // Рассчитываем ежемесячный платеж
        let x = Math.pow(1 + monthlyInterest, payments);
        let monthlyPayment = (amount * x * monthlyInterest) / (x - 1);

        // Округляем ежемесячный платеж до двух знаков после запятой
        monthlyPayment = monthlyPayment.toFixed(2);

        // Рассчитываем общую сумму платежа
        let totalPayment = (monthlyPayment * payments).toFixed(2);

        // Рассчитываем сумму переплат
        let totalInterest = (totalPayment - amount).toFixed(2);

        // Показываем результаты
        let html = "<h2>Результаты</h2>";
        html += "<p>Ежемесячный платеж: <span class='sum'>" + monthlyPayment + "</span></p>";
        html += "<p>Общая сумма платежа: <span class='sum'>" + totalPayment + "</span></p>";
        html += "<p>Переплата: <span class='sum'>" + totalInterest + "</span></p>";

        // Обновляем раздел результатов
        document.getElementById("results").innerHTML = html;
    };

    useEffect(() => {
        // Прикрепляем функцию расчета платежа к событию отправки формы
        const form = document.getElementById("loan-form");
        form.addEventListener("submit", calculatePayment);

        // Убираем слушатель при размонтировании компонента
        return () => {
            form.removeEventListener("submit", calculatePayment);
        };
    }, []); // Пустой массив зависимостей указывает, что эффект нужно вызвать только один раз

    return (
        <section id="MortgageСalculator">
            <div className="container">
                <h1>Кредитный калькулятор</h1>

                {/* Форма кредитного калькулятора */}
                <form id="loan-form">
                    <label>Сумма кредита:</label>
                    <input type="number" id="amount" placeholder="Введите сумму кредита" required />
                    <label>Процентная ставка:</label>
                    <input type="number" step="0.01" id="interest" placeholder="Введите процентную ставку" required />
                    <label>Срок погашения:</label>
                    <input type="number" id="years" placeholder="Введите срок погашения в годах" required />
                    <input type="submit" value="Рассчитать" />
                </form>

                {/* Раздел результатов кредитного калькулятора */}
                <div id="results" className="result"></div>
            </div>
        </section>
    );
}

export default MortgageСalculator;
