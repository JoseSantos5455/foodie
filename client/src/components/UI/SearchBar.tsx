import { SearchOutlined } from '@ant-design/icons';
import Button from './Button';


const SearchBar = () => {
  return (
    <form className="grid grid-cols-4 sm:gap-2 lg:w-max w-full lg:justify-items-end gap-2">
      <div className="relative col-span-3 ">
        <input type="text" className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none focus:border-primaryDark " />
        <span className="absolute inline-flex top-1/2 left-0.5 text-2xl text-gray-400 transform -translate-y-1/2">
          <SearchOutlined className="text-gray-500" />
        </span>
      </div>
      <Button theme="btn-dark">Search</Button>
    </form>
  );
};

export default SearchBar;
