import { model, Schema, Types } from "mongoose";

export type OrderDetails = {
  productId: Schema.Types.ObjectId;
  productQuantity: String;
  amount: String;
  orderId?: Schema.Types.ObjectId;
  createdAt: Date;
  updateAt: Date;
};

const orderDetail = new Schema(
  {
    productId: { type: String, required: true },
    productQuantity: { type: String, required: true },
    amount: { type: String },
    orderId: { type: Types.ObjectId, ref: "Order" },
  },
  {
    timestamps: true,
  }
);

export const OrderDetails = model<OrderDetails>("orderDetail", orderDetail);
