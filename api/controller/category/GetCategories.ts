import { Request, Response } from "express";
import { CategoryModel } from "../../model/category.model";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    res.json({ categories: categories });
  } catch (error) {
    res.json({ message: error });
  }
};
