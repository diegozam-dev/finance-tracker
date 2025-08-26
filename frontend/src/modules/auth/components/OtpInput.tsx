import React, { useRef, useState } from 'react';

import { authClient } from '../../../utils/auth-client';
import { useNavigate } from 'react-router';

const OtpInput = ({ userEmail }: { userEmail: string }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [otp, setOtp] = useState(Array(6).fill(''));
  const navigate = useNavigate();

  const handleChange = async (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9]/g, '');
    setOtp(newOtp);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every(digit => digit !== '')) {
      const { data, error } = await authClient.emailOtp.verifyEmail({
        email: userEmail,
        otp: newOtp.join('')
      });

      if (error) {
        return console.log(error.message);
      }

      console.log(data);

      return navigate('/auth/login');
    }
  };

  function handleBackspace(
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    const target = event.target as HTMLTextAreaElement;

    if (event.key === 'Backspace' && !target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  return (
    <div className="my-4 flex items-center justify-center gap-2">
      {otp.map((digit, index) => (
        <React.Fragment key={index}>
          <input
            type="text"
            maxLength={1}
            className="w-10 appearance-none h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={digit}
            onChange={e => handleChange(index, e.target.value)}
            onKeyDown={e => handleBackspace(e, index)}
            ref={el => {
              inputRefs.current[index] = el!;
            }}
          />
          {index === 2 && (
            <span className="text-2xl mx-2 text-slate-700">-</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OtpInput;
