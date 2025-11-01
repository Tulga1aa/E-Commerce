import { model, Schema } from "mongoose";

type Payment = {
  _id: string;
  productName: string;
  categoryId: string;
  price: string;
  qty: number;
  thumbnails: string;
  images: string[];
  coupon: string;
  salePercent: string;
  description: string;
  viewsCount: number;
};

const Payment = new Schema(
  {
    productName: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

export const PaymentModel = model<Payment>("Payment", Payment);
