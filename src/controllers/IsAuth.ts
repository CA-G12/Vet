import { Request, Response } from 'express'

export const isAuthenticated = (req:Request, res:Response) => {
  res.json({
    user: req.user
  })
}
