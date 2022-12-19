// Types Express
import { Request, Response } from 'express';

// Model
import { Category } from '../../app/models/Category';

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
