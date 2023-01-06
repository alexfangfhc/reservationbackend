import { connect } from 'mongoose';
import { config } from '../../config';

const { host, port, user, password, ssl } = config.mongo;

export const dbConnect = async () => {
    return await connect(
        `mongodb://${host}:${port}${ssl ? '' : '?ssl=false'}`,
        {
            ...(user ? { user } : {}),
            ...(user && password ? { pass: password } : {}),
            ...{ useNewUrlParser: true }
        }
    )
}