var nodemailer = require('nodemailer');
// get credentials (THIS IS NOT PROVIDED IN REPO)
const credentials = require('./config.js');

var setup = {
    host: 'smtp.gmail.com',
    auth: {
        user: credentials.USER,
        pass: credentials.PASS
    }
};

var transporter = nodemailer.createTransport(setup);

transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Ready to take emails');
    }
});

module.exports = transporter;