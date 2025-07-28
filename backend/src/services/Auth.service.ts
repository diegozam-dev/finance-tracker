import { AuthRepository } from '@/repositories/Auth.repository';

const authRepository = new AuthRepository();

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
    // console.log(email, password);

    const data = await authRepository.signUpWithEmail({
      firstname,
      lastname,
      email,
      password
    });

    return data;
  };
}
