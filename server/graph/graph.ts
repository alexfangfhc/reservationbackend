import { ApolloServer, mergeSchemas } from 'apollo-server-koa';
import { reservationSchema, tableSchema } from './schema';

export default async (app) => {
    const schema = mergeSchemas({
        schemas: [reservationSchema, tableSchema]
    })
    const server = new ApolloServer({ schema, playground: true });
    server.applyMiddleware({ app });
}
