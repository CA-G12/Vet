import { Router } from 'express'
import PostRoutes from './posts'
import auth from './auth'

const router = Router()
router.use(PostRoutes)
router.use(auth)

export default router
