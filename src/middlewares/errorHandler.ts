import { NextFunction, Request, Response } from 'express';
import CustomError from '../helpers/errorsHandling/CustomError';

const errorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
  error: CustomError,
) => {
  if (error.status) {
    res.status(error.status).json(error);
  } else {
    res.status(500).json(error);
  }
};

export default errorHandler;
