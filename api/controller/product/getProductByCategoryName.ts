import mongoose from "mongoose";
import { CategoryModel } from "../../model/category.model";
import { Request, Response } from "express";
import { ProductModel } from "../../model/product.model";

export const getProductByCategoryName = async (req: Request, res: Response) => {
  const { name } = req.params;

  try {
    const category = await CategoryModel.findOne({ name });

    if (!category) {
      res.status(400).json({ message: "category not found" });
      return;
    }

    const products = await ProductModel.find({ categoryId: category._id });

    res.status(200).json({ message: "success", products });
  } catch (error) {
    res.json({ message: error });
  }
};
