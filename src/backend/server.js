const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testserversite159@gmail.com',
        pass: 'gitm jhis mbgr thnj ',
        secure: true,
        requireTLS: true,
        tls: {
            rejectUnauthorized: false
        }
    }
});

const subscriptionsFilePath = path.join(__dirname, 'subscription.json');
const contactFormFilePath = path.join(__dirname, 'contactForm.json');
const callRequestFilePath = path.join(__dirname, 'callRequest.json');

if (!fs.existsSync(subscriptionsFilePath)) {
    fs.writeFileSync(subscriptionsFilePath, JSON.stringify([]));
}

if (!fs.existsSync(contactFormFilePath)) {
    fs.writeFileSync(contactFormFilePath, JSON.stringify([]));
}

if (!fs.existsSync(callRequestFilePath)) {
    fs.writeFileSync(callRequestFilePath, JSON.stringify([]));
}

function loadSubscriptions() {
    const data = fs.readFileSync(subscriptionsFilePath, 'utf8');
    return JSON.parse(data);
}

function saveSubscription(email) {
    const subscriptions = loadSubscriptions();
    subscriptions.push(email);
    fs.writeFileSync(subscriptionsFilePath, JSON.stringify(subscriptions, null, 2));
}

function loadContactForms() {
    const data = fs.readFileSync(contactFormFilePath, 'utf8');
    return JSON.parse(data);
}

function saveContactForm(formData) {
    const contactForms = loadContactForms();
    contactForms.push(formData);
    fs.writeFileSync(contactFormFilePath, JSON.stringify(contactForms, null, 2));
}

function loadCallRequests() {
    const data = fs.readFileSync(callRequestFilePath, 'utf8');
    return JSON.parse(data);
}

function saveCallRequest(requestData) {
    const callRequests = loadCallRequests();
    callRequests.push(requestData);
    fs.writeFileSync(callRequestFilePath, JSON.stringify(callRequests, null, 2));
}

app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ error: 'Некорректный email' });
    }
    saveSubscription(email);
    res.json({ message: 'Email добавлен в базу данных подписок' });
});


app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Не заполнены все обязательные поля' });
    }
    const formData = { name, email, message, id: Date.now() };
    saveContactForm(formData);
    res.json({ message: 'Данные формы успешно сохранены' });
});

app.post('/api/contact-modal', (req, res) => {
    const { name, phone } = req.body;
    if (!name || !phone) {
        return res.status(400).json({ error: 'Не заполнены все обязательные поля' });
    }
    const requestData = { name, phone, id: Date.now() };
    saveCallRequest(requestData);
    res.json({ message: 'Данные запроса на звонок успешно сохранены' });
});

app.post('/api/send-emails', async (req, res) => {
    const { subject, message } = req.body;
    try {
        const subscriptions = loadSubscriptions();
        if (subscriptions.length === 0) {
            return res.status(400).json({ error: 'Нет подписчиков для отправки рассылки' });
        }
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: subscriptions,
            subject: subject || 'Рассылка',
            html: `<p>${message || 'Привет, это тестовое сообщение для рассылки.'}</p>`,
            text: message || 'Привет, это тестовое сообщение для рассылки.',
            encoding: 'UTF-8'
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: 'Рассылка успешно отправлена' });
    } catch (error) {
        console.error('Ошибка отправки рассылки:', error);
        res.status(500).json({ error: 'Произошла ошибка при отправке рассылки' });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
