const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER || 'omaradan091@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'ddal fyew kpvy liky',
    },
});

const mailOptions = {
    from: 'omaradan091@gmail.com',
    to: 'mahrezbomton@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
