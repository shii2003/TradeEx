import { Request, Response } from "express";

export const getKline = async (req: Request, res: Response) => {
    const { market, interval, startTime, endTime } = req.query;


}