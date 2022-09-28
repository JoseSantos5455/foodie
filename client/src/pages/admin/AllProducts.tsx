import { useAppSelector } from '@/app/store';
import { useEffect } from 'react';
import { delProductStart, getProductsStart } from '@/app/slices/productSlice';
import { useDispatch } from 'react-redux';
import Loading from '@/components/loaders/Loading';
import { FaTrashAlt } from 'react-icons/fa';


import { getCategoriesStart } from '@/app/slices/categorySlice';

const AllProducts = () => {
  const { products, isLoadingProducts, isErrorProducts, token, categories } = useAppSelector((state) => ({
    products: state.products,
    isLoadingProducts: state.loadingState.isLoadingProducts,
    isErrorProducts: state.errorState.isErrorProducts,
    token: state.auth.token,
    categories: state.categories
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsStart());
    }
    if(categories.length ===0 ) {
      dispatch(getCategoriesStart())
    }
  }, [dispatch, products.length, categories.length]);

  const onProductDelete = (id: string) => {
    dispatch(delProductStart({ id, token }));
  };

  const findCategory =  (id: string) => categories.find(cat => cat._id === id )

  return (
    <section className="py-6  md:px-8 px-2 bg-white mt-6">
      {isLoadingProducts && <Loading />}
      {!isErrorProducts && !isLoadingProducts && products.length === 0 && <div className="text-center py-6">
        <h1 className="text-capitalize font-bold text-gray-600">
          No Product was found
        </h1>
      </div> }
      {!isErrorProducts && products.length > 0 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="capitalize">
                <th scope="col" className="px-2 py-3">
                  Image
                </th>
                <th scope="col" className="px-2 py-3">
                  PRODUCT NAME
                </th>
                <th scope="col" className="px-2 py-3">
                  CATEGORY
                </th>
                <th scope="col" className="px-2 py-3">
                  Stock count
                </th>
                <th scope="col" className="px-2 py-3">
                  Sold count
                </th>
                <th scope="col" className="px-2 py-3">
                  rating
                </th>
                <th scope="col" className="px-2 py-3">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                products.map((product) => (
                  <tr key={product._id} className="bg-white border-b">
                    <th className="p-4">
                      <img className="w-16 h-16 rounded" src={product.image} alt={product.title} />
                    </th>
                    <td className="px-2 py-3 font-medium text-gray-900  whitespace-nowrap">{product.title}</td>
                    <td className="px-2 py-3">{findCategory(product.category)?.name}</td>
                    <td className="px-2 py-3">{product.countInStock}</td>
                    <td className="px-2 py-3">{product.sold}</td>
                    <td className="px-2 py-3">{product.rating}</td>
                    <td className="px-2 py-3">
                      <span onClick={() => onProductDelete(product._id)} className="text-red-600">
                        <FaTrashAlt />
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AllProducts;
