import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from '@/config/db';
import productRoute from '@/components/products/productRoute';
import categoryRoute from '@/components/categories/categoryRoute';
import userRoute from '@/components/users/userRoute';
import reviewRoute from '@/components/reviews/reviewRoute';
import orderRoute from '@/components/orders/orderRoute';
import errorMiddleware from './middlewares/error.middleware';

dotenv.config({ path: __dirname + '/config/config.env' });
connectDB();

const app: express.Application = express();

app.use(express.json());
app.use('/api/v1/products', productRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/orders', orderRoute);

app.use(errorMiddleware);

export default app;
