import { config } from '../config/Constants'
import moongose from 'mongoose'

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await moongose.connect(config.MONGO_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("Database connected")
        } catch (error) {
            console.log(error.message)
            process.exit(1)
        }
    }
}