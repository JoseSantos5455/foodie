import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CategorySkeleton = () => {
  return (
    <div className="flex justify-between px-8 h-full py-2 flex-col ">
      {new Array(9).fill(null).map((item, index) => (
        <SkeletonTheme key={`cat-${index}`} baseColor="#d4d7d9" highlightColor="#e8eaeb">
          <div className="flex items-center justify-center space-x-2">
            <Skeleton width={15} count={1} />
            <Skeleton width={130} count={1} />
          </div>
        </SkeletonTheme>
      ))}
    </div>
  );
};

export default CategorySkeleton;
