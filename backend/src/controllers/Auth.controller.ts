import { Request, Response } from 'express';
import { AuthService } from '@/services/Auth.service';

export class AuthController {
  static signUpWithEmail = async (req: Request, res: Response) => {
    const { firstname, lastname, email, password } = req.body;

    // console.log(email, password);

    try {
      const result = AuthService.signUpWithEmail({
        firstname,
        lastname,
        email,
        password
      });

      res.status(200).json(result);
    } catch (e: any) {
      console.log(e.message);
    }
  };
}
