import { Request, Response } from 'express';

const notFoundHandler = (_req: Request, res: Response) => {
  res.redirect(301, '');
};

export default notFoundHandler;
