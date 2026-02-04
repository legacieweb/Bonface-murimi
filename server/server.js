import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Admin Email (To Portfolio Owner)
  const adminMailOptions = {
    from: `"Portfolio Inquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `🚀 New Project Inquiry from ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 24px; border: 1px solid #333;">
        <h2 style="color: #3b82f6; font-size: 24px; font-weight: 800; margin-bottom: 24px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Inquiry Received</h2>
        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 16px; margin-bottom: 24px;">
          <p style="margin: 0 0 10px 0;"><strong style="color: #3b82f6;">Name:</strong> ${name}</p>
          <p style="margin: 0 0 10px 0;"><strong style="color: #3b82f6;">Email:</strong> ${email}</p>
        </div>
        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 16px;">
          <strong style="color: #3b82f6; display: block; margin-bottom: 10px;">Message:</strong>
          <p style="line-height: 1.6; color: #cccccc; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <div style="margin-top: 30px; text-align: center; color: #666; font-size: 12px;">
          Sent from your portfolio contact form.
        </div>
      </div>
    `,
  };

  // Client Confirmation Email (To Sender)
  const clientMailOptions = {
    from: `"Bonface Murimi" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}!`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 24px; border: 1px solid #333;">
        <h2 style="color: #3b82f6; font-size: 24px; font-weight: 800; margin-bottom: 24px;">Message Received!</h2>
        <p style="font-size: 16px; line-height: 1.6; color: #cccccc; margin-bottom: 24px;">
          Hello ${name},<br><br>
          Thank you for reaching out! I've received your message and I'm excited to learn more about your project. 
        </p>
        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 16px; margin-bottom: 24px; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; color: #888; font-style: italic;">"I'll review your inquiry and get back to you within 24 hours. Looking forward to potentially working together!"</p>
        </div>
        <p style="font-size: 16px; line-height: 1.6; color: #cccccc;">
          In the meantime, feel free to check out my latest work on my portfolio.
        </p>
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
          <p style="margin: 0; font-weight: 800; color: #3b82f6;">BONFACE MURIMI</p>
          <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">Web Developer & Designer</p>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
