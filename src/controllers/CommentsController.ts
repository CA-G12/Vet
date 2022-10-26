import { Request, Response } from 'express'
import { Comment, User } from '../db'
import { commentSchema } from '../schemes'

export default class CommentsController {
  public static async index (req: Request, res: Response) {
    const { postId } = req.params
    const page: any = req.query.page || 1
    const comments = await Comment.findAndCountAll({
      where: {
        PostId: postId
      },
      attributes: ['PostId', 'UserId', 'comment', 'id', 'image'],
      include: [{
        model: User,
        attributes: ['id', 'name', 'role', 'avatar'
        ]
      }],
      limit: 2,
      offset: (page - 1) * 2
    })

    res.json(comments)
  }

  public static async store (req:Request, res:Response) {
    try {
      const {
        comment,
        image,
        UserId
      } = req.body
      const PostId = req.params.postId
      console.log(req.params)

      await commentSchema.validateAsync({ comment, image, PostId, UserId })
      const createComment = await Comment.create({ comment, image, PostId, UserId })
      console.log(JSON.parse(JSON.stringify(createComment)))

      res.status(200).json({ status: res.status, msg: 'new post added successfully', data: createComment })
    } catch (error) {
      res.status(400).json({
        msg: 'something went wrong',
        error
      })
    }
  }

  public static async dstroy (req: Request, res: Response) {
    Comment.destroy({
      where: req.params
    }).then(() => res.json(req.params)
    )
  }
}
