import { Request, Response, NextFunction } from 'express'
import passport from 'passport'

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    console.log(req.cookies)
    if (err) {
      throw new Error('unauthorized err')
    }
    if (!user) {
      throw new Error('unauthorized no user')
    }

    if (user.role === 'Admin') {
      req.user = { id: user.id, role: user.role, name: user.name }
      next()
    } else {
      throw new Error('unauthorized not an admin')
    }
  })(req, res, next)
}

export default isAdmin
