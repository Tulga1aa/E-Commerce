import express from "express";
import {
  CreateOrder,
  DeleteOrder,
  GetOrder,
  getOrders,
} from "../controller/order";

export const OrderRouter = express.Router();

OrderRouter.post("/", CreateOrder)
  .delete("/", DeleteOrder)
  .get("/", getOrders)
  .get("/:orderId", GetOrder);
