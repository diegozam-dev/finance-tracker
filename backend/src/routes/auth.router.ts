import { Router } from 'express';

import { toNodeHandler } from 'better-auth/node';
import { auth } from '@/utils/auth.js';

const authRouter = Router();

authRouter.all('/{*any}', toNodeHandler(auth));

export default authRouter;
