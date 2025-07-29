// import { IAuthRepository } from '@/interfaces/iRepositories/AuthRepository.interface';
import supabase from '@/db/connection';
import { AuthResponse } from '@supabase/supabase-js';

export class AuthRepository {
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

    console.log(data);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  verifyTokenForSignUp = async ({
    email,
    token
  }: {
    email: string;
    token: string;
  }) => {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email'
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };
}
