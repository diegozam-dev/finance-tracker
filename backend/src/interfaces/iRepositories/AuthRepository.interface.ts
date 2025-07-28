// import { Database } from '../../types/database.types';

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
  }): Promise<any>;
}
