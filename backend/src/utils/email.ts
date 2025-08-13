import emailjs from '@emailjs/browser';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID
} from '@/config.js';

const email = async ({
  userEmail,
  url
}: {
  userEmail: string;
  url: string;
}) => {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID!,
      EMAILJS_TEMPLATE_ID!,
      { userEmail, url },
      {
        publicKey: EMAILJS_PUBLIC_KEY
      }
    );
  } catch (err) {
    console.log('No se pudo enviar en email. Por favor inténtalo otra vez.');
  }
};

export default email;
