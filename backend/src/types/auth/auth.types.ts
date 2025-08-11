export type AuthResponseSchema = {
  token: string;
  user: {
    email: string;
    emailVerified: boolean;
    id: string;
    image?: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };
};
