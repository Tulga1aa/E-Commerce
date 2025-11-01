import { model, Schema, Types } from "mongoose";


type Category = {
name: string;
createdAt: Date
updatedAt: Date
};

const Category = new Schema(
  {
  name: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

export const CategoryModel = model<Category>("Category", Category);



