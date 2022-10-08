import { Link } from 'react-router-dom';
import { ICategory } from '@/types/types';

interface Props {
  categories: ICategory[];
  setOpen?: (open: boolean) => void;
}

const CategoryNav = ({ categories, setOpen }: Props) => {
  const handleClick = () => setOpen && setOpen(false);
  return (
    <ul className="flex lg:justify-between space-y-4 lg:space-y-0 lg:px-8 px-2 h-full py-2 flex-col ">
      {categories.map(({ name, image, _id, slug }) => (
        <li key={_id} className="font-semibold text-md transition-all">
          <Link
            onClick={handleClick}
            className="hover:opacity-70 flex space-x-2 items-center  text-primaryDark"
            to={`/shop?category=${slug}`}
          >
            <span>
              <img src={image} alt="category" className="w-4 h-4" />
            </span>
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryNav;
