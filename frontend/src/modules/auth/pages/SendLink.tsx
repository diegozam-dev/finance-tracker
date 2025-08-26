import { Input, Button } from '@material-tailwind/react';
import { authClient } from '../../../utils/auth-client';
import { useState } from 'react';

const SendLink = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendLink = async () => {
    const { data, error } = await authClient.requestPasswordReset({
      email: input,
      redirectTo: 'http://localhost:5173/auth/reset-password'
    });

    if (error) console.log(error);

    alert('Link enviado');
    console.log(data);
  };

  return (
    <>
      <h1>Hola password</h1>
      <Input onChange={handleInputChange} placeholder="email" />
      <Button onClick={handleSendLink}>Send Code</Button>
    </>
  );
};

export default SendLink;
