import { Router } from "express";
import { getTrades } from "../controllers/trades.controller";

const router = Router();

router.get("/", getTrades)

export default router;