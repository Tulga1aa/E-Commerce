import { model, Schema, Types } from "mongoose";

export type Order = {
  _id: string;
  userId: string;
  orderNumber: string;
  status: string;
  phoneNumber: string;
  deliveredDate: Date;
  totalAmount: string;
  coupon: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

const orderStats = ["ORDERED", "SHIPPED"];

const Order = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User" },
    orderNumber: { type: String, required: true },
    status: { type: String, enum: orderStats, require: true },
    phoneNumber: { type: String, require: true },
    deliveredDate: { type: Date },
    totalAmount: { type: String },
    coupon: { type: String },
    description: { type: String },
    orderDetails: [
      {
        type: Types.ObjectId,
        ref: "orderDetail",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model<Order>("Order", Order);
