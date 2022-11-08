import { useEffect } from 'react';

const useScrollTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
};
export default useScrollTop;
