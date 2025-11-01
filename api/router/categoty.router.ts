import express from "express";
import { CreateCategory, getCategories } from "../controller/category/";

export const CategoryRouter = express.Router();

CategoryRouter.post("/", CreateCategory).get("/", getCategories);
