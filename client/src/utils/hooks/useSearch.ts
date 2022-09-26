import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

export function useSearch(searchUrl: string | undefined) {
  const { data, error } = useSWR(searchUrl, fetcher);


  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
