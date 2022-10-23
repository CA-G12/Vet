import { User, Post, Like, Tag, Animal } from '../db'
import { Request, Response } from 'express'
import { Op } from 'sequelize'
import postSchema from '../schemes'

export default class PostsController {
  public static async store (req:Request, res:Response) {
    try {
      const { content, image, AnimalId, TagId, UserId } = req.body
      await postSchema.validateAsync({ content, image, AnimalId, TagId, UserId })
      const createPost = await Post.create({ content, image, AnimalId, TagId, UserId })
      res.status(200).json({ status: res.status, msg: 'new post added successfully', data: createPost })
    } catch (error) {
      res.status(400).json({
        msg: 'something went wrong',
        error
      })
    }
  }

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
      include: [{ model: User, attributes: ['name', 'avatar', 'id', 'role'] },
        { model: Like, attributes: ['id'], include: [{ model: User, attributes: ['name', 'id', 'avatar', 'role'] }] }, {
          model: Tag, attributes: ['id', 'name']
        }, {
          model: Animal, attributes: ['id', 'name']
        }],
      where: filterData
    })
    res.json((posts))
  }
}
