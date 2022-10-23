import { Router } from 'express'
import PostRoutes from './posts'
import CommentsRoutes from './comments'
import auth from './auth'

const router = Router()
router.use(PostRoutes)
router.use(CommentsRoutes)

router.use(auth)

export default router
