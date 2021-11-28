import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/UI/Layout';
import * as ROUTES from 'utils/routes';
import Cart from 'pages/cart';
const BillingDetails = lazy(() => import('pages/checkout/BillingDetails'));
const OrderSummary = lazy(() => import('pages/checkout/OrderSummary'));
const ProductDetails = lazy(() => import('pages/product'));
const Home = lazy(() => import('pages/home'));
const NotFound = lazy(() => import('pages/notFound'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<p>...loding</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.PRODUCT_DETAILS}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <ProductDetails />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CART}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_1}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <OrderSummary />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CHECKOUT_STEP_2}
          element={
            <Suspense fallback={<p>...loding</p>}>
              <BillingDetails />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<p>...loding</p>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
