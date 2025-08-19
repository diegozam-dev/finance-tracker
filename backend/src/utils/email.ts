// import { GOOGLE_CLIENT_SECRET } from '@/config.js';
import {
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN
} from '@/config.js';
import nodemailer from 'nodemailer';

export const sendOtp = async ({
  userEmail,
  otp
}: {
  userEmail: string;
  otp: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'diegozambrano.dev@gmail.com',
      clientId: OAUTH_CLIENT_ID,
      clientSecret: OAUTH_CLIENT_SECRET,
      refreshToken: OAUTH_REFRESH_TOKEN
    }
  });

  const mailOptions = {
    from: 'diegozambrano.dev@gmail.com',
    to: userEmail,
    subject: 'Verify your email address',
    text: `Your verification code is: ${otp}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: ' + info.response);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};
