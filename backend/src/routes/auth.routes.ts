import { Router } from 'express';
import { AuthController } from '@/controllers/Auth.controller';

const authRouter = Router();

authRouter.post('/signUpWithEmail', AuthController.signUpWithEmail);

export default authRouter;
