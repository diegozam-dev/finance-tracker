import { createBrowserRouter } from 'react-router';
import LandingPage from '../pages/LandingPage';
import { Login, Register, Otp, SendLink, ResetPassword } from '../modules/auth';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: LandingPage },
      { path: 'auth/login', Component: Login },
      { path: 'auth/register', Component: Register },
      { path: 'auth/otp', Component: Otp },
      { path: 'auth/send-link', Component: SendLink },
      { path: 'auth/reset-password', Component: ResetPassword },
      { path: '*', Component: NotFoundPage }
    ]
  }
]);

export default router;
