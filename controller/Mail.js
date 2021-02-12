const nodemailer = require('nodemailer');

const dummyTest = async () => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'papercutsbookstore@gmail.com',
      pass: 'ILIKEpiez',
    },
  });

  let mailOptions = {
    from: 'papercutsbookstore@gmail.com',
    to: 'mattbud2011@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = dummyTest;
