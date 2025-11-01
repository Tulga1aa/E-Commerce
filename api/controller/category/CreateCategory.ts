import { Request, Response } from "express";
import { CategoryModel } from "../../model/category.model";

export const CreateCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const category = await new CategoryModel({
      name: name,
    }).save();

    res.json({ category: category });
  } catch (error) {
    res.json({ message: error });
  }
};
