import mongoose from "mongoose";
import { PaymentModel } from "../../model/payment.model"; 
import { Request, Response } from "express";

export const createPayment = async (req: Request, res: Response) => {
  const { _id, productName, categoryId, price, qty,thumbnails,images,coupon,salePercent,description,viewsCount} = req.body;
  try {

    const Payment = await new PaymentModel({
        _id: _id,
        productName: productName,
        categoryId: categoryId,
        price: price,
        qty: qty,
        coupon: coupon,
        salePercent: salePercent,
        viewsCount: viewsCount,

    }).save();

    res.json({ Payment: Payment });
  } catch (error) {
    res.json({ message: error });
  }
};