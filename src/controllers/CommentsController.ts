import { Request, Response } from 'express';
import { Comment, User } from '../db';
import { commentSchema } from '../schemes';

export default class CommentsController {
  public static async index(req: Request, res: Response) {
    const { postId } = req.params;
    const page: any = req.query.page || 1;
    const comments = await Comment.findAndCountAll({
      where: {
        PostId: postId,
      },
      attributes: ['PostId', 'UserId', 'comment', 'id', 'image'],
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'role', 'avatar'],
        },
      ],
      order: [['id', 'DESC']],
      limit: 2,
      offset: (page - 1) * 2,
    });

    res.json(comments);
  }

  public static async store(req: Request, res: Response) {
    try {
      const { comment, image, UserId } = req.body;
      const PostId = req.params.postId;

      await commentSchema.validateAsync({ comment, image, PostId, UserId });
      const createComment = await Comment.create({
        comment,
        image,
        PostId,
        UserId,
      });
      const getNewComment = await Comment.findOne({
        where: { id: createComment.id },
        attributes: ['PostId', 'UserId', 'comment', 'id', 'image'],
        include: [
          {
            model: User,
            attributes: ['id', 'name', 'role', 'avatar'],
          },
        ],
      });

      res.status(200).json({
        status: res.status,
        msg: 'new post added successfully',
        data: getNewComment,
      });
    } catch (error) {
      res.status(400).json({
        msg: 'something went wrong',
        error,
      });
    }
  }

  public static async dstroy(req: Request, res: Response) {
    try {
      const deleteComment = Comment.destroy({
        where: req.params,
      });
      res.status(200).json({
        status: res.status,
        msg: 'delete comment successfully',
        data: deleteComment,
      });
    } catch (error) {
      res.status(400).json({
        msg: 'something went wrong',
        error,
      });
    }
  }

  public static async put(req: Request, res: Response) {
    try {
      const { comment, image, UserId } = req.body;
      const PostId = req.params.postId;

      await commentSchema.validateAsync({ comment, image, PostId, UserId });
      const editComment = await Comment.update(
        { comment, image },
        {
          where: { id: req.params.id },
        },
      );
      res.status(200).json({
        status: res.status,
        msg: 'edit comment successfully',
        data: editComment,
      });
    } catch (error) {
      res.status(400).json({
        msg: 'something went wrong',
        error,
      });
    }
  }
}
