const express = require('express');
const cors = require('cors');
const sendMail = require('./mail');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/email', (req, res) => {
    // req.body.name
    // req.body.email
    // req.body.message

    const { name, email, message } = req.body;
    res.json(`Name: ${name}. Email: ${email}. Message: ${message}`)

    sendMail(name, email, message);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});