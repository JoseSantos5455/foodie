import Loading from '@/components/loaders/Loading';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const NotFound = lazy(() => import('@/pages/errors/NotFound'));
const ServerError = lazy(() => import('@/pages/errors/ServerError'));

const ErrorRouter = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <ServerError />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default ErrorRouter;
