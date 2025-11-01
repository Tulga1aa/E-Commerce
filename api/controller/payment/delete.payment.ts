
import { Request, Response } from "express";
import { OrderModel } from "../../model/order.model";


export const deletePayment = async (req: Request, res: Response) => {
    try {
      const Payment = await OrderModel.findByIdAndDelete();
      res.json({ Payment: Payment });
    } catch (error) {
      res.json({ message: error });
    }
  };