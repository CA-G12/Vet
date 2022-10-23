import { Request, Response } from 'express'
import { Comment, User } from '../db'

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
}
