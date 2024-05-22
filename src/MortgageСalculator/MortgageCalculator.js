import React, { useEffect } from 'react';

function MortgageСalculator() {
    const calculatePayment = (e) => {
        e.preventDefault();
        const amount = parseFloat(document.getElementById("amount").value);
        const interest = parseFloat(document.getElementById("interest").value);
        const years = parseFloat(document.getElementById("years").value);
        const monthlyInterest = interest / 100 / 12;
        const payments = years * 12;
        let x = Math.pow(1 + monthlyInterest, payments);
        let monthlyPayment = (amount * x * monthlyInterest) / (x - 1);
        monthlyPayment = monthlyPayment.toFixed(2);
        let totalPayment = (monthlyPayment * payments).toFixed(2);
        let totalInterest = (totalPayment - amount).toFixed(2);
        let html = "<h2>Результаты</h2>";
        html += "<p>Ежемесячный платеж: <span class='sum'>" + monthlyPayment + "</span></p>";
        html += "<p>Общая сумма платежа: <span class='sum'>" + totalPayment + "</span></p>";
        html += "<p>Переплата: <span class='sum'>" + totalInterest + "</span></p>";

        document.getElementById("results").innerHTML = html;
    };

    useEffect(() => {
        const form = document.getElementById("loan-form");
        form.addEventListener("submit", calculatePayment);
        return () => {
            form.removeEventListener("submit", calculatePayment);
        };
    }, []);

    return (
        <section id="MortgageСalculator">
            <div className="container">
                <h1>Кредитный калькулятор</h1>

                {/* форма */}
                <form id="loan-form">
                    <label>Сумма кредита:</label>
                    <input type="number" id="amount" placeholder="Введите сумму кредита" required />
                    <label>Процентная ставка:</label>
                    <input type="number" step="0.01" id="interest" placeholder="Введите процентную ставку" required />
                    <label>Срок погашения:</label>
                    <input type="number" id="years" placeholder="Введите срок погашения в годах" required />
                    <input type="submit" value="Рассчитать" />
                </form>

                {/* результаты */}
                <div id="results" className="result"></div>
            </div>
        </section>
    );
}

export default MortgageСalculator;
