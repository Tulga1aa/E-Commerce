import UserModel from "../../model/user";
import { Request, Response } from "express";

export const CreateUser = async (req: Request, res: Response) => {
  const { email, firstName, lastName, password, phoneNumber, role } = req.body;
  try {
    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      res.status(404).json({ message: "User already exist" });
    }

    const user = await new UserModel({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      phoneNumber: phoneNumber,
      role: role,
    }).save();

    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};