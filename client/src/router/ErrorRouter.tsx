import Loading from '@/components/loaders/Loading';
import ServerError from '@/pages/errors/ServerError';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

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
    </Routes>
  );
};

export default ErrorRouter;
