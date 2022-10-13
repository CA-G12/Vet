import { Response, Request } from 'express'
import { User, Post, Like, Tag, Animal } from '../db'
import { Op } from 'sequelize'

const getPosts = async (req: Request, res: Response) => {
  const { tagId, animalId, searchContent } = req.query
  let filterData = { }
  tagId && animalId
    ? filterData = {
      content: {
        [Op.substring]: searchContent
      },
      TagId: tagId,
      AnimalId: animalId
    }
    : animalId
      ? filterData = {
        content: {
          [Op.substring]: searchContent
        },
        AnimalId: animalId
      }
      : tagId
        ? filterData = {
          content: {
            [Op.substring]: searchContent
          },
          TagId: tagId
        }
        : filterData = {
          content: {
            [Op.substring]: searchContent
          }
        }
  const posts = await Post.findAll({
    attributes: ['id', 'content', 'image'],
    include: [{ model: User, attributes: ['name', 'avatar', 'id'] },
      { model: Like, attributes: ['id'], include: [{ model: User, attributes: ['name', 'id'] }] }, {
        model: Tag, attributes: ['id', 'name']
      }, {
        model: Animal, attributes: ['id', 'name']
      }],
    where: filterData
  })
  res.json(JSON.parse(JSON.stringify(posts)))
}
export default getPosts
