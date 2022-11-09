import { NextFunction, Request, RequestHandler, Response } from 'express';
import CustomError, { isCustomError } from './CustomError';

const errorWrapper = (controller: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error: unknown) {
      if (isCustomError(error)) {
        if (error.name === 'JsonWebTokenError') {
          error.status = 401;
        } else if (error.name === 'ValidationError') {
          error.status = 422;
        }
        next(error);
      } else {
        next(
          new CustomError(
            500,
            (error as Error).message || 'Internal Server Error',
          ),
        );
      }
    }
  };
};
export default errorWrapper;
