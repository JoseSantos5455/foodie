import ProductList from '@/components/product/ProductList';
import { useParams } from 'react-router-dom';
import { useSearch } from '@/utils/hooks/useSearch';
import Loading from '@/components/loaders/Loading';

const Search = () => {
  const { searchWord } = useParams();
  const { products, isLoading, isError } = useSearch(`/products/search/${searchWord}`);

  return (
    <section className="py-10">
      {isLoading && <Loading />}
      <div className="flex xl:grid xl:grid-cols-5 gap-2 xl:overflow-x-hidden overflow-x-scroll">
      {!isError && products?.length > 0 && <ProductList products={products} hasBtn />}
      </div>
    </section>
  );
};

export default Search;
