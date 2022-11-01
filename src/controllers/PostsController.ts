import { User, Post, Like, Tag, Animal, Comment } from '../db';
import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import { postSchema } from '../schemes';

export default class PostsController {
  public static async store(req: Request, res: Response) {
    try {
      const { content, image, AnimalId, TagId, UserId } = req.body;
      await postSchema.validateAsync({
        content,
        image,
        AnimalId,
        TagId,
        UserId,
      });
      const createPost = await Post.create({
        content,
        image,
        AnimalId,
        TagId,
        UserId,
      });
      res.status(200).json({
        status: res.status,
        msg: 'new post added successfully',
        data: createPost,
      });
    } catch (error) {
      res.status(400).json({
        msg: 'something went wrong',
        error,
      });
    }
  }

  public static async index(req: Request, res: Response) {
    const { tagId, animalId, q = '' } = req.query;

    let filterData = {};

    if (tagId && animalId) {
      filterData = {
        content: {
          [Op.iLike]: `%${q}%`,
        },
        TagId: tagId,
        AnimalId: animalId,
      };
    } else if (animalId) {
      filterData = {
        content: {
          [Op.iLike]: `%${q}%`,
        },
        AnimalId: animalId,
      };
    } else if (tagId) {
      filterData = {
        content: {
          [Op.iLike]: `%${q}%`,
        },
        TagId: tagId,
      };
    } else {
      filterData = {
        content: {
          [Op.iLike]: `%${q}%`,
        },
      };
    }

    const posts = await Post.findAll({
      attributes: ['id', 'content', 'image'],
      include: [
        { model: User, attributes: ['name', 'avatar', 'id', 'role'] },
        {
          model: Like,
          attributes: ['id'],
          include: [
            { model: User, attributes: ['name', 'id', 'avatar', 'role'] },
          ],
        },
        {
          model: Tag,
          attributes: ['id', 'name'],
        },
        { model: Comment, attributes: ['id'] },
        {
          model: Animal,
          attributes: ['id', 'name'],
        },
      ],
      where: filterData,
    });
    res.json(posts);
  }

  public static async update(req: Request, res: Response, next: NextFunction) {
    try {
      // if (req.user) {
      //   console.log(req.user);
      // }
      console.log(req.user);

      const { content, image, AnimalId, TagId } = req.body;
      await postSchema.validateAsync({
        content,
        image,
        AnimalId,
        TagId,
      });
      const [, [updatePost]] = await Post.update(
        {
          content,
          image,
          AnimalId,
          TagId,
        },
        { where: { id: req.params.postId }, returning: true },
      );

      res.status(200).json({
        status: res.status,
        msg: 'post updated successfully',
        data: updatePost,
      });
    } catch (error) {
      next(error);
    }
  }
}
