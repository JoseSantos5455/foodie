import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/db';
import productRouter from './components/products/productRoute';
import errorMiddleware from './middlewares/error.middleware';

dotenv.config({ path: __dirname + '/config/config.env' });
connectDB();

const app: express.Application = express();

app.use(express.json());
app.use('/api/v1/products', productRouter);

app.use(errorMiddleware);

export default app;
