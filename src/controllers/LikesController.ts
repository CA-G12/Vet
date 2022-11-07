import { Like, Post } from '../db';
import { Request, Response } from 'express';
import CustomError from '../helpers/errorsHandling/CustomError';

export default class LikesController {
  public static async store(req: Request, res: Response) {
    const { PostId } = req.body;
    const UserId = req.user?.id;
    const postDoesExist = await Post.findByPk(PostId);
    const isLiked = await Like.findOne({ where: { UserId, PostId } });

    if (!isLiked && postDoesExist) {
      const addLike = await Like.create({
        UserId,
        PostId,
      });
      console.log(postDoesExist);

      res.json({
        status: res.status,
        msg: 'post liked successfully',
        data: addLike,
      });
    } else {
      throw new CustomError(
        400,
        'something went wrong, you cannot like this post',
      );
    }
  }

  public static async destroy(req: Request, res: Response) {
    const { PostId } = req.body;
    const UserId = req.user?.id;
    const isLiked = await Like.findOne({ where: { UserId, PostId } });
    if (isLiked) {
      const removeLike = await Like.destroy({
        where: { UserId, PostId },
      });
      res.json({
        status: res.status,
        msg: 'post unliked successfully',
        data: removeLike,
      });
    }
    throw new CustomError(
      400,
      'something went wrong, you cannot like this post',
    );
  }
}
