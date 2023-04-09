const nodemailer = require("nodemailer");
const User = require("../controllers/user.controllers")
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.G_USERNAME,
        pass: process.env.G_PASS
    }

});

module.exports = transporter;