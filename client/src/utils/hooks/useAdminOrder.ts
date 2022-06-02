import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string, token: string) =>
  axios
    .get(url, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => res.data.data)
    .catch((err) => console.log(err.message));

export function useAdminOrder(id: string | undefined, token: string) {
  const { data, error } = useSWR([`/orders/admin/${id}`, token], fetcher);
  return {
    order: data,
    isLoading: !error && !data,
    isError: error,
  };
}
