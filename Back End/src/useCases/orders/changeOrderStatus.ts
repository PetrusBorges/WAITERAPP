// Types Express
import { Request, Response } from 'express';

// Model
import { Order } from '../../app/models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({
        error: 'Status must be one of these: WAITING, IN_PRODUCTION and DONE.',
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
