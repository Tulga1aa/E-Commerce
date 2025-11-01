import { Request, Response } from "express";
import { OrderModel } from "../../model/order.model";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find()
      .populate("userId")
      .populate({
        path: "orderDetails",
        populate: { path: "productId" },
      });

    res.json({ orders, message: "Success" });
  } catch (error) {
    res.json({ message: error });
  }
};