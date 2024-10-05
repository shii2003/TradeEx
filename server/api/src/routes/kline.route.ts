import { Router } from "express";
import { getKline } from "../controllers/kline.contorller";

const router = Router();

router.get("/", getKline)

export default router;