import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import environment from '../../config/environment';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) {
    throw new Error('Unauthorized');
  }
  const user: any = jwt.verify(token, environment.secretKey);
  if (user.role === 'ADMIN') {
    req.user = user;
    next();
  } else {
    throw new Error('Unauhorzed');
  }
};
