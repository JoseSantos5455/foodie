import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

export function useProduct(slug: string | undefined) {
  const { data, error } = useSWR(`/products/${slug}`, fetcher, { shouldRetryOnError: false });

  return {
    product: data,
    isLoading: !error && !data,
    isError: error,
  };
}
