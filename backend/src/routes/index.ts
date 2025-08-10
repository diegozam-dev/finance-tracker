import { Router, json } from 'express';

import authRouter from './auth.router.js';

const apiRouter = Router();
const router = Router();

apiRouter.get('/v1/api', (_req, res) => {
  res.send('Hola mundo api');
});
apiRouter.use('/v1/api/auth', authRouter);

apiRouter.use(json());

router.use('/', apiRouter);

export default router;
