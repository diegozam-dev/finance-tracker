import { AuthRepository } from '@/repositories/index';
import * as z from 'zod';

const authRepository = new AuthRepository();

const UserSignUpData = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.email(),
  password: z.string()
});

export class AuthService {
  static signUpWithEmail = async ({
    firstname,
    lastname,
    email,
    password
  }: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }) => {
    try {
      const validInput = UserSignUpData.parse({
        firstname,
        lastname,
        email,
        password
      });

      console.log(validInput);

      const data = await authRepository.signUpWithEmail(validInput);

      return data;
    } catch (e: any) {
      console.log(e.message);
      throw e;
    }
  };

  static verifyTokenForSignUp = async ({
    email,
    token
  }: {
    email: string;
    token: string;
  }) => {
    const data = await authRepository.verifyTokenForSignUp({
      email,
      token
    });

    return data;
  };
}
