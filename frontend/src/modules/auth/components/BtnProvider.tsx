import { Button } from '@material-tailwind/react';
import { authClient } from '../../../utils/auth-client';
import { type BtnProviderProps } from '../types/authTypes';

const BtnProvider = ({ label, provider }: BtnProviderProps) => {
  const handleSignInWithProvider = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const { data, error } = await authClient.signIn.social({
      provider: provider,
      callbackURL: 'http://localhost:5173/'
    });

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    alert(data);
    console.log(data);
  };

  return (
    <Button isFullWidth onClick={handleSignInWithProvider}>
      {label}
    </Button>
  );
};

export default BtnProvider;
