import { Request, Response } from "express";
import { RedisManager } from "../RedisManager";
import { GET_DEPTH } from "../utils/types/responseTypes";

export const getDepth = async (req: Request, res: Response) => {
    const { symbol } = req.query;
    const redisManager = await RedisManager.getInstance();
    const response = await redisManager.sendAndAwait({
        type: GET_DEPTH,
        data: {
            market: symbol as string,
        }
    })

    res.json(response.payload);
}