import { createBrowserRouter } from 'react-router';
import Landing from '../modules/landing/Landing';
import { Login, Register } from '../modules/auth';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Landing },
      { path: 'auth/login', Component: Login },
      { path: 'auth/register', Component: Register }
    ]
  }
]);

export default router;
