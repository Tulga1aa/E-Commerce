import express from "express";
import {
  CreateOrderDetails,
  GetOrderDetail,
  DeleteOrderDetail,
} from "../controller/orderDetail";
export const OrderDetailRouter = express.Router();

OrderDetailRouter.post("/", CreateOrderDetails)
  .get("/", GetOrderDetail)
  .delete("/", DeleteOrderDetail);
