import express from "express";
import { connectDb } from "./database";
import { UserRouter } from "./router/userRouter";
import { OrderRouter } from "./router/orderRouter";
import { OrderDetailRouter } from "./router/order.detailRouter";
import { productRouter } from "./router/productRouter";
import { CategoryRouter } from "./router/categoty.router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 8001;

app.use("/users", UserRouter);
app.use("/orders", OrderRouter);
app.use("/OrderDetails", OrderDetailRouter);
app.use("/product", productRouter);
app.use("/categories", CategoryRouter);

connectDb();

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
