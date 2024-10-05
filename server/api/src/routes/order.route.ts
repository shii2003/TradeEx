import { Router } from "express";
import { cancelOrder, createOrder, getOpenOrders } from "../controllers/order.controller";

const router = Router();

router.post("/", createOrder);
router.delete("/", cancelOrder);
router.get("/open", getOpenOrders);

export default router;