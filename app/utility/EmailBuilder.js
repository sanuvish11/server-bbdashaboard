var MailMessage = require('./MailMessage');

/**
 * Email builder creates email messages for application. 
 */

class EmailBuilder {

    /**
     * Get signup message 
     */

    static getSignUpMessage(map) {

        var mailMsg = new MailMessage();

        mailMsg.subject = 'Hi'+"  " + map.first_name + ' you have been succefully registered!!';

        var msg = "";

        msg += "<HTML><BODY>";
        msg += "Registration is successful for Burden Bearers";
        msg += "<H1>Hi! Greetings from Burden Bearers!</H1>";
        msg += "<P>Congratulations for registering on Burden Bearers! You can now access your Burden Bearers account online - anywhere, anytime and enjoy the flexibility to check the Marksheet Details.</P>";
        msg += "<P>Log in today at <a href='http://Burden.Bearers.com'>http://Burden.Bearers.com</a> with your following credentials:</P>";
        msg += "<P><B>Login Id : " + map.email + "<BR>"
            + " Password : " + map.password + "</B></p>";
        msg += "<P> As a security measure, we recommended that you change your password after you first log in.</p>";
        msg += "<p>For any assistance, please feel free to call us at +91 98273 60504 or 0731-4249244 helpline numbers.</p>";
        msg += "<p>You may also write to us at Burden.Bearersco.in.</p>";
        msg += "<p>We assure you the best service at all times and look forward to a warm and long-standing association with you.</p>";
       
        msg += "</BODY></HTML>";

        mailMsg.message = msg;

        return mailMsg;
    }

    /**
     * Get forgot password message
     * @param {*} map 
     */
    static getForgetPasswordMessage(map) {

        var mailMsg = new MailMessage();

        mailMsg.subject = 'Hi' + map.first_name + ' your forgotten password';

        var msg = '';
        msg += "<HTML><BODY>";
        msg += "<H1>Your password is recovered !! "
            + map.first_name + " " + map.last_name + "</H1>";
        msg += "<P><B>To access account user Login Id : "
            + map.email + "<BR>" + " Password : "
            + map.password + "</B></p>";
        msg += "</BODY></HTML>";

        mailMsg.message = msg;

        return mailMsg;
    }

    /**
     * Get Changepassword message
     * @param {*} map 
     */
    static getChangePasswordMessage(map) {

        var mailMsg = new MailMessage();

        mailMsg.subject = 'Hi' + map.first_name + ' your password is changed!!';

        var msg = '';
        msg += "<HTML><BODY>";
        msg += "<H1>Your Password has been changed Successfully !! "
            + map.first_name + " " + map.last_name + "</H1>";

        msg += "<P><B>To access account user Login Id : "
            + map.email + "<BR>" + " Password : "
            + map.password + "</B></p>";
        msg += "</BODY></HTML>";

        mailMsg.message = msg;

        return mailMsg;
    }

}

//Export to module 
module.exports = EmailBuilder;

