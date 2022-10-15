import { Post } from '../models'
import { Request, Response } from 'express'

export default class PostsController {
  public static async store (req:Request, res:Response) {
    const { content, image, AnimalId, TagId, UserId } = req.body
    try {
      const createPost = await Post.create({ content, image, TagId, AnimalId, UserId })
      res.status(200).json({ status: res.status, msg: 'new post added successfully', data: createPost })
    } catch (err) {
      console.log(err)
    }
  }
}
