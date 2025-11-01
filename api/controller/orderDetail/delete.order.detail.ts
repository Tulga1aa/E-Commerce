
import { Request, Response } from "express";
import { OrderDetails } from "../../model/order.detail.model";


export const DeleteOrderDetail = async (_req: Request, res: Response) => {
    try {
      const orderDetail = await OrderDetails.findByIdAndDelete();
      res.json({ orderDetail: orderDetail });
    } catch (error) {
      res.json({ message: error });
    }
  };