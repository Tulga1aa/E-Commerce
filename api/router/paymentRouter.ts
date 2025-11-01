import express from "express";
import { deletePayment, createPayment, getPayments } from "../controller/payment"


export const paymentRouter = express.Router();

paymentRouter.post("/",createPayment)
           .delete("/",deletePayment)
           .get("/",getPayments)
          

