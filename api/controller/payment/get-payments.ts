import { Request, Response } from "express";
import { PaymentModel } from "../../model/payment.model";

export const getPayments = async (_req: Request, res: Response) => {
  const {_id} = _req.body
  try {
    const getPayment = await PaymentModel.find(_id)
    res.json({getPayment : getPayment});
  } catch (error) {
    res.send({message : error});
  }
};
