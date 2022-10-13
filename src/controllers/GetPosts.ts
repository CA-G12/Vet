import { Response, Request } from 'express'
import { User, Post, Like, Tag, Animal } from '../db'
import { Op } from 'sequelize'

const getPosts = async (req: Request, res: Response) => {
  const { tagID, animalId, searchContent } = req.query
  const posts = await Post.findAll({
    attributes: ['id', 'content', 'image'],
    include: [{ model: User, attributes: ['name', 'avatar', 'id'] },
      { model: Like, attributes: ['id'], include: [{ model: User, attributes: ['name', 'id'] }] }, {
        model: Tag, attributes: ['id', 'name']
      }, {
        model: Animal, attributes: ['id', 'name']
      }],
    where: {
      TagId: tagID,
      AnimalId: animalId,
      content: {
        [Op.substring]: searchContent
      }
    }
  })
  res.json(JSON.parse(JSON.stringify(posts)))
}
export default getPosts
