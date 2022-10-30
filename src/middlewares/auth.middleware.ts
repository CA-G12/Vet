import { NextFunction, Request, Response } from 'express';
import { User } from 'models';
import { verifyJWT } from 'utils/verifyToken';

type UserJWT = Pick<User, 'id' | 'name' | 'avatar' | 'role'>;

export const isRole =
  (role: User['role']) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header('Authorization');
      if (!token) {
        throw new Error('Unauthorized');
      }
      const user = await verifyJWT<UserJWT>(token);
      if (user.role === role) {
        req.user = user;
        next();
      } else {
        throw new Error('Unauhorzed');
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
    const token = req.header('Authorization');
    if (!token) {
      throw new Error('Unauthorized');
    }
    const user = await verifyJWT<UserJWT>(token);
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};
