import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    mongo: {
        host: process.env.DB_HOST ?? 'localhost',
        port: process.env.DB_PORT ?? 27017,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: process.env.DB_SSL ?? false,
    },
}