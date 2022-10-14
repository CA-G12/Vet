import { Response, Request } from 'express'
import { User, Post, Like, Tag, Animal } from '../db'
import { Op } from 'sequelize'

const getPosts = async (req: Request, res: Response) => {
  const { tagId, animalId, searchCountent } = req.query
  console.log(req.query)

  let filterData = { }
  tagId && animalId
    ? filterData = {
      content: {
        [Op.substring]: searchCountent || ''
      },
      TagId: tagId,
      AnimalId: animalId
    }
    : animalId
      ? filterData = {
        content: {
          [Op.substring]: searchCountent || ''
        },
        AnimalId: animalId
      }
      : tagId
        ? filterData = {
          content: {
            [Op.substring]: searchCountent || ''
          },
          TagId: tagId
        }

        : filterData = {
          content: {
            [Op.substring]: ''
          }
        }
  console.log(filterData)

  // : searchContent
  // ? filterData = {
  //   content: {
  //     [Op.substring]: searchContent
  //   }
  // }
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
  res.json((posts))
}
export default getPosts
