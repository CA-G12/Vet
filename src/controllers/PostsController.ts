import { Response, Request } from 'express'
import { User, Post, Like, Tag, Animal } from '../db'
import { Op } from 'sequelize'

export default class PostsController {
  // for getting all data
  public static async index (req: Request, res: Response) {
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
        { model: Like, attributes: ['id'], include: [{ model: User, attributes: ['name', 'id', 'avatar'] }] }, {
          model: Tag, attributes: ['id', 'name']
        }, {
          model: Animal, attributes: ['id', 'name']
        }],
      where: filterData
    })
    res.json((posts))
  }
}