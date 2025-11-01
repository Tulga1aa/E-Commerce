import express from "express";
import {
  CreateProduct,
  GetProduct,
  DeleteProduct,
  UpdateProduct,
  getProductByCategoryName,
} from "../controller/product";

export const productRouter = express.Router();

productRouter
  .post("/", CreateProduct)
  .get("/", GetProduct)
  .delete("/", DeleteProduct)
  .put("/", UpdateProduct)
  .get("/category/:name", getProductByCategoryName);
