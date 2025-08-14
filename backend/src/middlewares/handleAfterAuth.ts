import dbPool from '@/db/connection.js';
import { AuthContext, MiddlewareContext, MiddlewareOptions } from 'better-auth';
import { createAuthMiddleware } from 'better-auth/api';
import { AuthResponseSchema } from '@/types/auth/auth.types.js';
import { auth } from '@/utils/auth.js';

const handleAfterAuth = createAuthMiddleware(async ctx => {
  try {
    if (ctx.path.endsWith('/sign-up/email')) {
      handleSignUpWithEmail(ctx);
    }
  } catch (error) {
    console.log(error);
  }
});

const handleSignUpWithEmail = async (
  ctx: MiddlewareContext<
    MiddlewareOptions,
    AuthContext & {
      returned?: unknown;
      responseHeaders?: Headers;
    }
  >
) => {
  const client = await dbPool.connect();

  const response = ctx.context.returned as AuthResponseSchema;
  const user = response.user;

  if (!user || !user.id) {
    throw new Error('User creation failed in authentication system.');
  }

  await client.query('SELECT * FROM create_profile_with_username($1, $2)', [
    user.id,
    user.name
  ]);

  const data = await auth.api.sendVerificationOTP({
    body: {
      email: user.email,
      type: 'email-verification'
    }
  });

  console.log(data);

  client.release();
};

export default handleAfterAuth;
