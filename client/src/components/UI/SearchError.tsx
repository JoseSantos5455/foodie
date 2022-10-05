import Button from '@/components/UI/Button';
import { HOME } from '@/utils/routes';
import { Link } from 'react-router-dom';

const SearchError = ({ searchWord }: { searchWord?: string }) => {
  return (
    <div className=" py-6 flex items-center justify-center">
      <div className="bg-white rounded shadow-md sm:flex p-6">
        <p className="bg-gradient-to-br from-purpleBeta to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          404
        </p>
        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Search Result Not Found</h1>
            <p className="mt-1 text-base text-gray-600">
              {searchWord && <span>No results for {searchWord} .</span>}
              {!searchWord && <span>No results found.</span>}
            </p>
          </div>
          <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <Link to={HOME}>
              <Button theme="btn-secondary">Back home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchError;
