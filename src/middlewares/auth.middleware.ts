import { NextFunction, Request, Response } from 'express';
import { verifyJWT } from '../utils/verifyToken';
import { User } from '../models';

type UserJWT = Pick<User, 'id' | 'name' | 'avatar' | 'role'>;

export const isRole =
  (role: User['role']) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const headerToken = req.header('Authorization');
      const authToken = headerToken?.split('Bearer ')?.[1];
      if (!authToken) {
        throw new Error('Unauthorized');
      }
      const user = await verifyJWT<UserJWT>(authToken);
      if (user.role === role) {
        req.user = user;
        next();
      } else {
        throw new Error('Unauthorized');
      }
    } catch (e) {
      next(e);
    }
  };

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const headerToken = req.header('Authorization');
    const authToken = headerToken?.split('Bearer ')?.[1];
    if (!authToken) {
      throw new Error('Unauthorized');
    }
    const user = await verifyJWT<UserJWT>(authToken);
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};
