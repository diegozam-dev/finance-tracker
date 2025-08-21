import { createBrowserRouter } from 'react-router';
import Landing from '../modules/landing/Landing';
import { Login, Register } from '../modules/auth';
import Otp from '../modules/otp/Otp';
// import ResetPassword from '../modules/resetPassword/ResetPassword';
import SendLink from '../modules/resetPassword/SendLink';
import ResetPassword from '../modules/resetPassword/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Landing },
      { path: 'auth/login', Component: Login },
      { path: 'auth/register', Component: Register },
      { path: 'auth/otp', Component: Otp },
      { path: 'auth/send-link', Component: SendLink },
      { path: 'auth/reset-password', Component: ResetPassword }
    ]
  }
]);

export default router;
