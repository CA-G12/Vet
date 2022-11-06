import { Like } from '../db';
import { Request, Response } from 'express';
import CustomError from '../helpers/errorsHandling/CustomError';

export default class LikesController {
  public static async store(req: Request, res: Response) {
    const { PostId } = req.body;
    const UserId = req.user?.id;
    const isLiked = await Like.findOne({ where: { UserId, PostId } });
    if (!isLiked) {
      const addLike = await Like.create({
        where: {
          PostId: req.params.like,
          UserId,
        },
      });
      res.status(200).json({
        status: res.status,
        msg: 'post liked successfully',
        data: addLike,
      });
    }
    throw new CustomError(400, 'what');
  }
}
