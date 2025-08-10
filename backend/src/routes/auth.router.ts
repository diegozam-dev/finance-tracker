import { Router } from 'express';

import { toNodeHandler } from 'better-auth/node';
import { auth } from '@/utils/auth.js';

const authRouter = Router();

authRouter.all('/v1/api/auth/{*any}', toNodeHandler(auth));

export default authRouter;
