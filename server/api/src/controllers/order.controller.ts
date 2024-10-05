import { Request, Response } from "express"
import { RedisManager } from "../RedisManager";
import { CANCEL_ORDER, CREATE_ORDER, GET_OPEN_ORDERS } from "../utils/types/responseTypes";

export const createOrder = async (req: Request, res: Response) => {
    const { market, price, quantity, side, userId } = req.body;
    console.log({ market, price, quantity, side, userId });

    //correct the resp type
    const redisManager = await RedisManager.getInstance();
    const response = await redisManager.sendAndAwait({
        type: CREATE_ORDER,
        data: {
            market,
            price,
            quantity,
            side,
            userId,
        }
    });
    res.json(response.payload)
}

export const cancelOrder = async (req: Request, res: Response) => {
    const { orderId, market } = req.body;

    const redisManager = await RedisManager.getInstance();
    const response = await redisManager.sendAndAwait({
        type: CANCEL_ORDER,
        data: {
            orderId,
            market,
        }
    });

    res.json(response.payload);

}

export const getOpenOrders = async (req: Request, res: Response) => {
    const redisManager = await RedisManager.getInstance();
    const response = await redisManager.sendAndAwait({
        type: GET_OPEN_ORDERS,
        data: {
            userId: req.query.userId as string,
            market: req.query.market as string
        }
    });

    res.json(response.payload);
}