import { AuthApiError } from '@supabase/supabase-js';
import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AuthApiError) {
    return res.status(err.status).json({ ...err, message: err.message });
  }

  return;
};

export default errorHandler;
