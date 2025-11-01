import { Order, OrderModel } from "../../model/order.model";
import { Request, Response } from "express";
import { OrderDetails } from "../../model/order.detail.model";
import currency = require("currency.js");

type CreateOrderRequsetBody = Order & {
  orderItems: OrderDetails[];
};

export const CreateOrder = async (req: Request, res: Response) => {
  const { userId, phoneNumber, coupon, description, orderItems } =
    req.body as CreateOrderRequsetBody;

  try {
    const createdNewOrderItems = await OrderDetails.insertMany(orderItems);

    const createdNewOrderItemIds = createdNewOrderItems.map(
      (orderItem) => orderItem._id
    );

    const totalAmount = calculateOrderTotalAmount(orderItems);

    const order = await new OrderModel({
      userId,
      orderNumber: 0,
      status: "ORDERED",
      phoneNumber: phoneNumber,
      totalAmount: totalAmount,
      coupon: coupon,
      description: description,
      orderItems: [createdNewOrderItemIds],
    }).save();

    res.json({ order, message: "Order successfully created" });
  } catch (error) {
 
    res.json({ message: error });
  }
};

const calculateOrderTotalAmount = (orderItems: OrderDetails[]) => {
  const totalAmount = orderItems.reduce((totalAmountAcc, orderItem) => {
    const formattedAmount = Number(orderItem.amount);
    const formattedQuantity = Number(orderItem.productQuantity);

    const orderItemAmount =
      currency(formattedAmount).multiply(formattedQuantity).value;
    totalAmountAcc = totalAmountAcc + orderItemAmount;

    return totalAmountAcc;
  }, 0);

  return totalAmount;
};
