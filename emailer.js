const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:  'omaradan091@gmail.com',
        pass:  'ddal fyew kpvy liky',
    },
});

const mailOptions = {
    from: 'omaradan091@gmail.com',
    to: 'mahrezbomton@gmail.com',
    subject: 'Test Email',
    text: 'Hello Mahrez Bomton this is a reminder for your next appointment on 2nd of September 2025 at 10:00 AM. please confirm your attendance.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
