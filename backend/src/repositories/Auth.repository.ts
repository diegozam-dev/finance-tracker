import { IAuthRepository } from '@/interfaces/iRepositories/AuthRepository.interface';
import supabase from '../db/connection';

export class AuthRepository implements IAuthRepository {
  signUpWithEmail = async ({
    firstname,
    lastname,
    email,
    password
  }: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }): Promise<any> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstname,
          lastname
        }
      }
    });

    console.log(email, password);
    console.log(data);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };
}
