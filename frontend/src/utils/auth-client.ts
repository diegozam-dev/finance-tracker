import { createAuthClient } from 'better-auth/react';
import { emailOTPClient } from 'better-auth/client/plugins';

import { VITE_SERVER_URL } from '../config';

export const authClient = createAuthClient({
  baseURL: VITE_SERVER_URL,
  plugins: [emailOTPClient()]
});
