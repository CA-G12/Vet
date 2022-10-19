import { Router } from 'express'
import PostRoutes from './posts'

const router = Router()
router.use(PostRoutes)

export default router
