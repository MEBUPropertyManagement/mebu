const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  streamTransport: true,
  newline: 'windows',
});

const registrationEmail = email =>
  transporter.sendMail(
    {
      from: 'kovich@michaelkovich.com',
      to: `${email}`,
      subject: 'Welcome to EMU Property Management!',
      text: 'Plain text content goes here.',
      html: '<html><p>Hello</p></html>',
    },
    (err, info) => {
      console.log(info.envelope);
      console.log(info.messageId);
      info.message.pipe(process.stdout);
    },
  );

module.exports = {
  registrationEmail,
};
