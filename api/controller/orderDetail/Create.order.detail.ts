
import { OrderDetails } from "../../model/order.detail.model";
import { Request, Response } from "express";

export const CreateOrderDetails = async (req: Request, res: Response) => {
  const { productId, productQuantity, amount, orderId, createdAt,updatedAt } = req.body;
  try {
    const OrderDetailfrom = await OrderDetails.findOne({ productId });

    if (OrderDetailfrom) {
      res.status(404).json({ message: "OrderDetails already exist" });
    }

    const OrderDetail = await new OrderDetails({
        productId,
        productQuantity,
        amount,
        orderId,
        createdAt,
        updatedAt,
    }).save();

    res.json({ OrderDetail: OrderDetail });
  } catch (error) {
    res.json({ message: error });
  }
};