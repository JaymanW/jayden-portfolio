const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const auth = {
    auth: {
        api_key: process.env.MAILGUN_APIKEY,
        domain: process.env.MAILGUN_DOMAIN
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, message) => {
    const mailOptions = {
        from: process.env.EMAIL_TO,
        to: process.env.EMAIL_TO,
        subject: 'New Website Email!',
        text: `Name: ${name}. Email: ${email}. Message: ${message}.`
    }
    
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err, null);
        } else {
            console.log(null, data);
        }
    });
}

sendMail();

module.exports = sendMail;