const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//     to: 'samson.ugwu.com@gmail.com',
//     from: 'samson.ugwu.com@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you'
// }

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email, 
        from: 'samson.ugwu.com@gmail.com', 
        subject: 'Registration Successful', 
        text: `Dear ${name}, Your registration to Scheduler Task Manager App was successful. Try exploring interesting features of the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'samson.ugwu.com@gmail.com', 
        subject: 'Deleting Your Account', 
        text: `Dear ${name}, your Scheduler Task Manager App account has been deleted, we would like to know if there any thing we can do to keep you back`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


















// .then(() => console.log('Mail sent successfully'))
// .catch(error => console.error(error.toString()));



