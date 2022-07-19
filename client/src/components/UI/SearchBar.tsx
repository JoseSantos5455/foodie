import { SearchOutlined } from '@ant-design/icons';
import Button from './Button';
import '@/styles/UI/searchBar.css';

const SearchBar = () => {
  return (
    <form className="search-form">
      <div className="relative col-span-3 ">
        <input type="text" className="search-input " />
        <span className="search-icon">
          <SearchOutlined className="text-gray-500" />
        </span>
      </div>
      <Button theme="btn-dark">Search</Button>
    </form>
  );
};

export default SearchBar;
