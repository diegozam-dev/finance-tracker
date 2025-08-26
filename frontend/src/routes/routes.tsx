import { createBrowserRouter } from 'react-router';
import LandingPage from '../pages/LandingPage';
import { Login, Register, Otp, SendLink, ResetPassword } from '../modules/auth';
import NotFoundPage from '../pages/NotFoundPage';
import Home from '../pages/Home';
import AuthContainer from '../modules/auth/layouts/AuthContainer';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: ':userId', Component: Home },
      { path: 'landing-page', Component: LandingPage },
      {
        path: 'auth',
        Component: AuthContainer,
        children: [
          { path: 'login', Component: Login },
          { path: 'register', Component: Register },
          { path: 'otp', Component: Otp },
          { path: 'send-link', Component: SendLink },
          { path: 'reset-password', Component: ResetPassword }
        ]
      },
      { path: '*', Component: NotFoundPage }
    ]
  }
]);

export default router;
