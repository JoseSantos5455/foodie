import App from './app';
import IndexRoute from './components';
import CategoryRoute from './components/categories/categoryRoute';
import OrderRoute from './components/orders/orderRoute';
import ProductsRoute from './components/products/productRoute';
import ReviewRoute from './components/reviews/reviewRoute';
import UserRoute from './components/users/userRoute';

const app = new App([
  new IndexRoute(),
  new ProductsRoute(),
  new UserRoute(),
  new ReviewRoute(),
  new OrderRoute(),
  new CategoryRoute(),
]);
app.listen();

process.on('unhandledRejection', (err: NodeJS.ErrnoException) => {
  console.log(`Error : ${err.message}`);
});
