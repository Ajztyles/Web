import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    try {
      // Configure the transporter with SMTP settings from environment variables
      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      let info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.CONTACT_EMAIL,
        subject: "Contact Form Submission",
        text: message,
        html: `<p>${message}</p>`,
      });

      console.log("Message sent: %s", info.messageId);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
