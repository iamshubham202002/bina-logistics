import express from "express";
import { createOrder } from "../Controllers/paymentController.js";

const router = express.Router();

router.post("/create-order", createOrder);

export default router;
