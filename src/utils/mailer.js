const nodemailer = require("nodemailer");
const User = require("../controllers/user.controllers")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "continicolas6@gmail.com",
        pass: "iswvypsgfhzacmaf"
    }

});

module.exports = transporter;