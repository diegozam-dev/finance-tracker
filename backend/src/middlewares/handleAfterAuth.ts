import dbPool from '@/db/connection.js';
import { AuthContext, MiddlewareContext, MiddlewareOptions } from 'better-auth';
import { createAuthMiddleware } from 'better-auth/api';
import { AuthResponseSchema } from '@/types/auth/auth.types.js';

const handleAfterAuth = createAuthMiddleware(async ctx => {
  try {
    if (ctx.path.endsWith('/sign-up/email')) {
      handleSignUp(ctx);
    }
  } catch (error) {
    console.log(error);
  }
});

const handleSignUp = async (
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

  const [firstname, lastname] = user.name.split(' ');

  await client.query('SELECT * FROM create_profile_with_username($1, $2, $3)', [
    user.id,
    firstname,
    lastname
  ]);

  client.release();
};

export default handleAfterAuth;
