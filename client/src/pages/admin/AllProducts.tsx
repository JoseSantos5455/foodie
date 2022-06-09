import { useAppSelector } from 'app/store';
import { useEffect } from 'react';
import { getProductsStart } from 'app/slices/productSlice';
import { useDispatch } from 'react-redux';
import Loading from 'components/loaders/Loading';

const AllProducts = () => {
  const { products, isLoadingProducts, isErrorProducts } = useAppSelector((state) => ({
    products: state.products,
    isLoadingProducts: state.loadingState.isLoadingProducts,
    isErrorProducts: state.errorState.isErrorProducts,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsStart());
    }
  }, [dispatch, products.length]);

  return (
    <section className="py-6 bg-white mt-6">
      {isLoadingProducts && <Loading />}
      {!isErrorProducts && products.length > 0 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:px-8 px-2">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="capitalize">
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  PRODUCT NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  CATEGORY
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock count
                </th>
                <th scope="col" className="px-6 py-3">
                  Sold count
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">rating</span>
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
                    <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">{product.title}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">{product.countInStock}</td>
                    <td className="px-6 py-4">{product.sold}</td>
                    <td className="px-6 py-4">{product.rating}</td>
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
