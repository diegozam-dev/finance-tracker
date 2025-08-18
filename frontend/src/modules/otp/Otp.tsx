import { Typography } from '@material-tailwind/react';
import OtpInput from './components/OtpInput';
import { useLocation } from 'react-router';

const Otp = () => {
  const location = useLocation();
  const userEmail = location.state.userEmail;

  return (
    <div className="w-full max-w-sm">
      <Typography
        variant="small"
        color="primary"
        className="flex items-center justify-center gap-1 text-center font-medium"
      >
        Enter the 6-digit OTP sent to{' '}
        <span className="font-bold">{userEmail}</span>
      </Typography>

      <OtpInput userEmail={userEmail} />

      <Typography
        variant="small"
        className="text-center font-normal text-primary-500"
      >
        Did not receive the code? <span className="font-bold">Resend</span>
      </Typography>
    </div>
  );
};

export default Otp;
