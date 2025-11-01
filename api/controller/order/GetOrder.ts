import { Request, Response } from "express";
import { OrderModel } from "../../model/order.model";

export const GetOrder = async (req: Request, res: Response) => {
  const { orderId } = req.body;
  try {
    const order = await OrderModel.findById(orderId)
      .populate("userId")
      .populate({
        path: "orderDetails",
        populate: { path: "productId" },
      });

    res.json({ order, message: "success" });
  } catch (error) {
    res.json({ message: error });
  }
};
