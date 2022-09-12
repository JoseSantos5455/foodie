import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

export function useSearch(search: string | undefined) {
  const { data, error } = useSWR(`/products/shop/${search}`, fetcher);


  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
