const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// get transporter
const transporter = require('./transporter.js')

// get credentials (THIS IS NOT PROVIDED IN REPO)
const credentials = require('./config.js');

// allows the parsing of POST body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// set our port to listen to
const port = process.env.PORT || 5000;

// handles sending email
app.post("/send", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var fullMessage = name + "\n\n" + email + "\n\n" + message;

    var emailDeliver = {
        from: name,
        to: credentials.USER,
        subject: 'Message from navey.github.io',
        text: fullMessage
    };

    transporter.sendMail(emailDeliver, (err,data) => {
        if(err){
            res.json({
                message: 'no'
            })
        }
        else{
            res.json({
                message: 'yes'
            })
        }
    });
});

app.listen(port, () => console.log(`Listening at ${port}`));