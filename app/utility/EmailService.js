//Import Node Mailer module
var nodemailer = require('nodemailer');
var system = require('./system.js');
var MailMessage = require('./MailMessage');
var EmailBuilder = require('./EmailBuilder');

/**
 * EmailService class providing email services
 */

class EmailService {

    /**
     * Constructor of class
     */
    constructor() {
        console.log('--->' + system.mail.auth.user);
        this.serverConfig = {
            service: system.mail.service,
            auth: {
                user: system.mail.auth.user,
                pass: system.mail.auth.password
            }
        }
    }

    /**
     * Send Email 
     * @param {*} mailMessage 
     * @param {*} callback reported by error or response 
     */
    sendEmail(mailMessage, callback) {
        var email = {
            from: system.mail.user,
            to: mailMessage.to,
            subject: mailMessage.subject,
            html: mailMessage.message
          };
        //Transporter to send email
        var transporter = nodemailer.createTransport(this.serverConfig);
        //Send email
        transporter.sendMail(email, function (error, info) {
            callback(error, info);
        });
    }
}

//Export to module 
module.exports = EmailService;


// var m = { login: 'sanuvish11@gmail.com', password: 'Shanu@9691', firstName: 'shanu', lastName: 'vishwakae' };
// var v = EmailBuilder.getChangePasswordMessage(m);

// var msg = new MailMessage();
// msg.to = 'ersanuvish11@gmail.com';
// msg.subject ='Test message';
// msg.message = v;

// var ser = new EmailService()
// ser.sendEmail(msg,function(err,result){
//     console.log(err);
//     console.log(result);
// });


