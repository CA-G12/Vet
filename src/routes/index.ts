import { Router } from 'express'

import signInRouter from './users'
import PostsController from '../controllers/PostsController'

import auth from './auth'
import PostRoutes from './posts'

const router = Router()

router.get('/posts', PostsController.index)

router.use(signInRouter)
router.use(PostRoutes)
router.use(auth)

export default router
