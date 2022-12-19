// Types Express
import { Request, Response } from 'express';

// Model
import { Order } from '../../app/models/Order';

export async function cancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
