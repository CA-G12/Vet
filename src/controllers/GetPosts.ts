import { Response, Request } from 'express'
import { User, Post, Like, Animal, Tag } from '../models'
const getPosts = async (req: Request, res: Response) => {
  const posts = await User.findAll({
    attributes: ['id', 'content', 'image'],
    include: [{ model: Post }]
  })
  console.log(JSON.stringify(posts))
}
export default getPosts
