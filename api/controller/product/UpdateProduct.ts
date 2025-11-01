import mongoose from "mongoose";
import { Request, Response } from "express";
import { ProductModel } from "../../model/product.model"; 


export const UpdateProduct = async (req: Request, res: Response) => {
    const {id,productName, price} = req.body;
    try {
        const objectId = mongoose.Types.ObjectId.createFromHexString(id)
      const Product = await ProductModel.findOneAndUpdate(
        { _id: objectId },
        { productName : productName},
        { price : price},
     
      );
      res.json({ Product: Product });
    } catch (error) {
      res.json({ message: error });
    }
  };


