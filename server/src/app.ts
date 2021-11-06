import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/db';
import productRoute from './components/products/productRoute';
import categoryRoute from './components/categories/categoryRoute';
import errorMiddleware from './middlewares/error.middleware';

dotenv.config({ path: __dirname + '/config/config.env' });
connectDB();

const app: express.Application = express();

app.use(express.json());
app.use('/api/v1/products', productRoute);
app.use('/api/v1/category', categoryRoute);

app.use(errorMiddleware);

export default app;
