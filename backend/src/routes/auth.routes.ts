import { Router } from 'express';
import { AuthController } from '@/controllers/index';

const authRouter = Router();

authRouter.post('/signUpWithEmail', AuthController.signUpWithEmail);
authRouter.post('/verifyTokenForSignUp', AuthController.verifyTokenForSignUp);

export default authRouter;
