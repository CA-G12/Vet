import { Post } from '../models'
import { Request, Response } from 'express'
import postSchema from '../schemes'

export default class PostsController {
  public static async store (req:Request, res:Response) {
    try {
      const { content, image, AnimalId, TagId, UserId } = req.body
      await postSchema.validateAsync({ content, image, AnimalId, TagId, UserId })
      const createPost = await Post.create({ content, image, AnimalId, TagId, UserId })
      res.status(200).json({ status: res.status, msg: 'new post added successfully', data: createPost })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
