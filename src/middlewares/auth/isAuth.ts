import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import environment from '../../config/environment';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    throw new Error('Unauthorized');
  } else {
    const user = jwt.verify(token, environment.secretKey);
    req.user = user;
    next();
  }
};
