import express from "express";
import { CreateUser, GetUser, GetUsers, UpdateUser } from "../controller/user";

export const UserRouter = express.Router();

UserRouter.post("/", CreateUser)
  .get("/", GetUsers)
  .get("/:userId", GetUser)
  .put("/", UpdateUser);
