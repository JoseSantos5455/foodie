import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductSkeleton = () => {
  return (
    <div className="flex xl:grid xl:grid-cols-5 gap-2 xl:overflow-x-hidden overflow-x-scroll">
      {new Array(5).fill(null).map((item, index) => (
        <div key={`product-${index}`} className="h-72 xl:w-auto w-72 bg-white shadow-md p-2">
          <SkeletonTheme baseColor="#d4d7d9" highlightColor="#e8eaeb">
            <Skeleton width={211} count={1} height={211} />
            <div className="flex justify-between mb-2">
              <Skeleton width={90} count={1} />
              <Skeleton width={20} count={1} />
            </div>
            <div className="flex justify-between">
              <Skeleton width={40} count={1} />
              <Skeleton width={70} count={1} />
            </div>
          </SkeletonTheme>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
