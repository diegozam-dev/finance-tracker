import supabase from '@/db/connection';

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
  }) => {
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

    if (error) throw error;

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

    if (error) throw error;

    return data;
  };
}
