import { Router } from 'express';
import authRouter from './auth.routes';

const apiRouter = Router();
const router = Router();
const apiPath = '/v1/api';

apiRouter.use(`${apiPath}/auth`, authRouter);

router.get('/', (_req, res) => {
  res.send('Hola mundo');
});
router.use('/', apiRouter);

export default router;
