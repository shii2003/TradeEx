import { Request, Response } from "express";

export const getTrades = async (req: Request, res: Response) => {

    const { market } = req.query;
    //todo: get data from postgresDB

    res.json({});
}