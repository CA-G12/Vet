import { NextFunction, Request, Response } from 'express';
import CustomError from './CustomError';

const errorWrapper = (controller: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error: any) {
      if (error.name === 'ValidationError') {
        error.status = 422;
      }
      next(
        new CustomError(
          error.status || 500,
          error.message || 'Internal Server Error',
        ),
      );
    }
  };
};
export default errorWrapper;
