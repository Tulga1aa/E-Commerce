
import { Request, Response } from "express";
import { ProductModel } from "../../model/product.model"; 


export const DeleteProduct = async (_req: Request, res: Response) => {
    try {
      const Product = await ProductModel.findByIdAndDelete();
      res.json({ Product: Product });
    } catch (error) {
      res.json({ message: error });
    }
  };