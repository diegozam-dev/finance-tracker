import { betterAuth } from 'better-auth';
import { Pool } from 'pg';

import {
  PG_USER,
  PG_PASSWORD,
  PG_HOST,
  PG_PORT,
  PG_DATABASE,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
} from '@/config.js';

export const auth = betterAuth({
  database: new Pool({
    user: PG_USER,
    password: PG_PASSWORD,
    host: PG_HOST,
    port: PG_PORT as number,
    database: PG_DATABASE
  }),
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    google: {
      clientId: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!
    }
  },
  trustedOrigins: ['http://localhost:5173']
});
