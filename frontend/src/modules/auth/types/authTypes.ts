export type LoginFormData = {
  email: string;
  password: string;
  remember?: boolean;
};

export type RegisterFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};
