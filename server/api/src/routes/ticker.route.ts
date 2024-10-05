import { Router } from "express";
import { getTicker } from "../controllers/ticker.controller";

const router = Router();

router.get("/", getTicker);

export default router;