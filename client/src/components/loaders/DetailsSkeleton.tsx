import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ProductSkeleton from './ProductSkeleton';

const DetailsSkeleton = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#d4d7d9" highlightColor="#e8eaeb">
        <div className="lg:grid grid-cols-8 gap-8 bg-white justify-between shadow-md p-4 mb-8">
          <div className="col-span-4">
            <Skeleton className="h-96" />
          </div>
          <div className="col-span-4  flex flex-col justify-between">
            <Skeleton />
            <Skeleton width={150} />
            <Skeleton count={4} />
            <Skeleton />
            <Skeleton width={20} />
            <Skeleton width={70} />
            <Skeleton width={200} height={50} />
          </div>
        </div>
        <div className=" shadow-md lg:grid grid-cols-2 gap-8 mb-4">
          <div className="bg-white shadow p-2">
            <Skeleton height={100} />
          </div>
          <div className="bg-white shadow p-2">
            <Skeleton height={100} />
          </div>
          <div className="bg-white shadow p-2">
            <Skeleton height={100} />
          </div>
          <div className="bg-white shadow p-2">
            <Skeleton height={100} />
          </div>
        </div>
        <div>
          <Skeleton width={100} className="inline-block mb-4" />
          <ProductSkeleton />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default DetailsSkeleton;
