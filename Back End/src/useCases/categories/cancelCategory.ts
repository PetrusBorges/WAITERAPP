// Types Express
import { Request, Response } from 'express';

// Model
import { Category } from '../../app/models/Category';

export async function cancelCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    await Category.findByIdAndDelete(categoryId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
