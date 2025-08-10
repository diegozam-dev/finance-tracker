import { Request, Response } from 'express';

import { auth } from '../utils/auth.js';

const authController = async (req: Request, res: Response) => {
  const { provider } = req.body;

  const response = auth.api.signInSocial(provider);

  res.status(200).json(response);
  try {
  } catch (error) {
    console.log(error);
  }
};

export default authController;
