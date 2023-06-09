const nodemailer = require('nodemailer');

export default function handler(req, res) {

  const message = {
    from: req.body.email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    email: req.body.email,
    betreff: req.body.betreff,
    checked: req.body.checkbox,
    name: req.body.name,
    message: req.body.message,

    html: `<p>${req.body.name} </p>
    <p>From: ${req.body.email} </p>
    <p>Message: ${req.body.betreff} </p>
    <p>Checked: ${req.body.checkbox} </p>
    <p>Email: ${req.body.message} </p>
    `,
  };

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {

      if (err) {
        res.status(404).json({
            error: `Connection refused at ${err.address}`
        });
      } else {
        res.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}