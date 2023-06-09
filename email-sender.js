const nodemailer = require('nodemailer');

async function sendEmail() {
  // Create a transporter using your email credentials
  const transporter = nodemailer.createTransport({
    service: 'your-email-service',
    auth: {
      user: 'your-email',
      pass: 'your-password',
    },
  });

  // Configure the email options
  const mailOptions = {
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js',
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
