import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/UI/Layout';

import * as ROUTES from 'utils/routes';
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
