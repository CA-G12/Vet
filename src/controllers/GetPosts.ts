import { Response, Request } from 'express'
import { User, Post, Like, Tag, Animal } from '../db'
import { Op } from 'sequelize'

const getPosts = async (req: Request, res: Response) => {
  const { tagId, animalId, q } = req.query
  console.log(req.query)

  let filterData = { }
  if (tagId && animalId) {
    filterData = {
      content: {
        [Op.substring]: q || ''
      },
      TagId: tagId,
      AnimalId: animalId
    }
  } else if (animalId) {
    filterData = {
      content: {
        [Op.substring]: q || ''
      },
      AnimalId: animalId
    }
  } else if (tagId) {
    filterData = {
      content: {
        [Op.substring]: q || ''
      },
      TagId: tagId
    }
  } else if (q) {
    filterData = {
      content: {
        [Op.substring]: q
      }
    }
  } else {
    filterData = {
      content: {
        [Op.substring]: ''
      }
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
  res.json((posts))
}
export default getPosts
