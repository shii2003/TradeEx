import { RedisClientType, createClient } from "redis";
import { MessageFromOrderbook } from "./utils/types/responseTypes";
import { MessageToEngine } from "./utils/types/to";

export class RedisManager {
    private client: RedisClientType;
    private publisher: RedisClientType;
    private static instance: RedisManager;

    private constructor() {
        this.client = createClient({
            url: process.env.REDIS_CLOUD_CONNECTION_URL,
        });
        this.publisher = createClient({
            url: process.env.REDIS_CLOUD_CONNECTION_URL,
        });
    }

    private async connect() {
        await this.client.connect();
        await this.publisher.connect();
    }

    public static async getInstance() {
        if (!this.instance) {
            this.instance = new RedisManager();
            await this.instance.connect();
        }
        return this.instance;
    }

    public sendAndAwait(message: MessageToEngine) {
        return new Promise<MessageFromOrderbook>((resolve) => {
            const id = this.getRandomClientId();
            this.client.subscribe(id, (message) => {
                this.client.unsubscribe(id);
                resolve(JSON.parse(message));
            });
            this.publisher.lPush("messages", JSON.stringify({ clientId: id, message }));
        });

    }

    public getRandomClientId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

}