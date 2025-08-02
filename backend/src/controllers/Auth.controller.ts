import { NextFunction, Request, Response } from 'express';
import { AuthService } from '@/services/index';

export class AuthController {
  static signUpWithEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { firstname, lastname, email, password } = req.body;

    try {
      const result = await AuthService.signUpWithEmail({
        firstname,
        lastname,
        email,
        password
      });

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

  static verifyTokenForSignUp = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { email, token } = req.body;

    try {
      const result = await AuthService.verifyTokenForSignUp({
        email,
        token
      });

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
}
