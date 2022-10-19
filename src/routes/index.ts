import { Router } from 'express'
import PostRoutes from './posts'
import express from 'express'

const router = Router()
router.use(PostRoutes)

export default router
