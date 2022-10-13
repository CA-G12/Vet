import { getPosts } from '../controllers'
import { Router } from 'express'
const router = Router()
router.get('/posts', getPosts)

export default router
