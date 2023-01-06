import app from './index';
import {dbConnect} from './adapters/mongodb';

const port = process.env.port || 3002;
app.listen(port, async () => {
    console.log(`Graphql server is running at port:${port}`);
    await dbConnect();
});