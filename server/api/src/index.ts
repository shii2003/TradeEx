import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import redis, { RedisClientType } from "redis";
import { createClient } from "redis";

import depth from './routes/depth.route';
import kline from './routes/kline.route';
import order from './routes/order.route';
import ticker from './routes/ticker.route';
import trades from './routes/trades.route'


dotenv.config();
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json());


const redisClient = createClient({
    url: process.env.REDIS_CLOUD_CONNECTION_URL,
})
redisClient.on('error', (err) => {
    console.log("Unable to connect to redis: ", err);
});
redisClient.connect();

const clientId = 1234;
const payload = {
    amount: 123,
    unit: 1,
}
const message2 = {
    clientId: 345,
    payload: {
        amount: 233,
        unit: 2,
    }
}

const message = { clientId, payload }
redisClient.rPush('messages', JSON.stringify(message))
redisClient.rPush('messages', JSON.stringify(message2));

redisClient.brPop('messages', 0)


app.use('api/v1/depth', depth);
app.use('api/v1/kline', kline);
app.use('api/v1/order', order);
app.use('api/v1/ticker', ticker);
app.use('api/v1/trades', trades);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})