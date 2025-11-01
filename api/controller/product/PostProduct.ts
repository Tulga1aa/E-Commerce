import { ProductModel } from "../../model/product.model";
import { Request, Response } from "express";

export const CreateProduct = async (req: Request, res: Response) => {
  const { productName, categoryId, price,images,description} = req.body;
  try {
    const Product = await new ProductModel({
        productName: productName,
        categoryId: categoryId,
        price: price,
        images: images,
        description: description,
    }).save();
    res.json({ Product: Product });
  } catch (error) {
    res.json({ message: error });
  }
};
