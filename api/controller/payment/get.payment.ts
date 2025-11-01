import mongoose from "mongoose";
import { CategoryModel } from "../../model/CategoryModel";
import { Request, Response } from "express";

export const GetCategory = async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(_id);
    const Category = await CategoryModel.findById({ _id: objectId });
    res.json({ Category: Category });
  } catch (error) {
    res.json({ message: error });
  }
};
