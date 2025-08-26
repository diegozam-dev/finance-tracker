import { Button, Input } from '@material-tailwind/react';
import { authClient } from '../../../utils/auth-client';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import AuthContainer from '../layouts/AuthContainer';

// Página para resetear contraseña
const ResetPassword = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleReset = async () => {
    const token = new URLSearchParams(window.location.search).get('token');

    if (!token) {
      console.log('No hay token');
    }

    const { data, error } = await authClient.resetPassword({
      newPassword: input, // required
      token: token!
    });

    if (error) console.log(error);

    console.log(data);
    navigate('/auth/login');
  };

  return (
    <AuthContainer>
      <Input onChange={handleInputChange} placeholder="new password" />
      <Button type="submit" onClick={handleReset}>
        Reset Password
      </Button>
    </AuthContainer>
  );
};

export default ResetPassword;
