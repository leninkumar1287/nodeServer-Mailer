const nodemailer = require('nodemailer')
require('dotenv').config()

//transporter for NodeMailer

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SENDER,
        pass: process.env.PASSWORD
    }
})

module.exports = transporter