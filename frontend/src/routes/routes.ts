import { createBrowserRouter } from 'react-router';
import Landing from '../modules/landing/Landing';
import { Login, Register } from '../modules/auth';
import Otp from '../modules/otp/Otp';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Landing },
      { path: 'auth/login', Component: Login },
      { path: 'auth/register', Component: Register },
      { path: 'auth/otp', Component: Otp }
    ]
  }
]);

export default router;
