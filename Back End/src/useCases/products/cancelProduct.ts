// Types Express
import { Request, Response } from 'express';

// Model
import { Product } from '../../app/models/Product';

export async function cancelProduct(req: Request, res: Response) {
  try {
    const { productsId } = req.params;

    await Product.findByIdAndDelete(productsId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
