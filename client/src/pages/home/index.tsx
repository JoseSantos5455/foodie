import React from 'react';
import ErrorBoundary from 'modules/ErrorBoundary';
// import { getProductsStart } from 'app/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'app/store';
import ProductList from 'components/product/ProductList';
import ErrorCard from 'components/UI/ErrorCard';
import { Link } from 'react-router-dom';
import { getCategoriesStart } from 'app/slices/categorySlice';
import CategoryNav from 'components/UI/CategoryNav';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const dispatchAction = () => dispatch(getCategoriesStart());
  const { products, isErrorProducts, isLoadingProducts, categories, isLoadingCategory, isErrorCategory } =
    useAppSelector((state) => ({
      products: state.products,
      isErrorProducts: state.errorState.isErrorProducts,
      isLoadingProducts: state.loadingState.isLoadingProducts,
      categories: state.categories,
      isLoadingCategory: state.loadingState.isLoadingCategory,
      isErrorCategory: state.errorState.isErrorCategory,
    }));

  return (
    <ErrorBoundary>
      <section className="py-10">
        <button onClick={dispatchAction}>Get Products</button>
        <Link to="/shop">shop</Link>
        <div className=" grid grid-cols-5 gap-2 mb-10">
          <div className="bg-white shadow-md">
            {isLoadingCategory && <span>loading...</span>}
            {isErrorCategory && <span>error !.</span>}
            {categories.length > 0 && <CategoryNav categories={categories} />}
          </div>
          <div className="col-span-4">
            <div className="h-72 p-2 hover:p-1 bg-white shadow-md">
              <img
                src="https://i.pinimg.com/originals/0b/39/14/0b3914ae30b768461468509a81e94d9c.jpg"
                alt="banner"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
        {isLoadingProducts && <p>loading...</p>}
        {isErrorProducts && <ErrorCard message={isErrorProducts.message} />}
        <div className=" grid grid-cols-5 gap-2">{products.length > 0 && <ProductList products={products} />}</div>
      </section>
    </ErrorBoundary>
  );
};

export default Home;
