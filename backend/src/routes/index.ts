import { Router } from 'express';

import authRouter from './auth.router.js';

const apiRouter = Router();

apiRouter.get('/v1/api', (_req, res) => {
  res.send('Hola mundo api');
});

export { authRouter, apiRouter };
