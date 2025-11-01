import { model, Schema } from "mongoose";

interface Product {
  productName: string;
  categoryId: string;
  price: string;
  qty: number;
  thumbnails: string;
  images: string[];
  coupon: string;
  salePercent: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema(
  {
    productName: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    price: { type: String },
    qty: { type: Number },
    thumbnails: { type: String },
    images: [{ type: String }],
    coupon: { type: String },
    salePercent: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<Product>("Product", ProductSchema);
