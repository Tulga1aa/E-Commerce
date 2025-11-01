import mongoose from "mongoose";
import UserModel from "../../model/user";
import { Request, Response } from "express";


export const UpdateUser = async (req: Request, res: Response) => {
    const { id, email } = req.body;
    try {
      const objectId = mongoose.Types.ObjectId.createFromHexString(id);
  
      const user = await UserModel.findOneAndUpdate(
        { _id: objectId },
        { email: email },
        {
          new: true,
        }
      );
      res.json({ user: user });
    } catch (error) {
      res.json({ message: error });
    }
  };