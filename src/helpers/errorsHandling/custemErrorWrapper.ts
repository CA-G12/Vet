import { NextFunction, Request, Response } from 'express'
import CustumError from './CustumError'

const errorWraper = (controller:Function) => {
  return async (req:Request, res:Response, next:NextFunction) => {
    try {
      controller(req, res, next)
    } catch (error:any) {
      // handle error types
      next(new CustumError(error.status || 500, error.message || 'Internal Server Error'))
    }
  }
}
export default errorWraper
