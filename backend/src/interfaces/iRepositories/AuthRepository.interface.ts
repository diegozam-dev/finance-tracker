import { AuthResponse } from '@supabase/supabase-js';

export interface IAuthRepository {
  signUpWithEmail({
    firstname,
    lastname,
    email,
    password
  }: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }): Promise<AuthResponse>;
}
