
import { Request, Response } from "express";
import { OrderDetails } from "../../model/order.detail.model";


export const GetOrderDetail = async (_req: Request, res: Response) => {
    try {
      const OrderDetail = await OrderDetails.find();
      res.json({ OrderDetail: OrderDetail });
    } catch (error) {
      res.json({ message: error });
    }
  };