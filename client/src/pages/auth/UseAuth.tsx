import { useAppSelector } from 'app/store';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/loaders/Loading';

interface Props {
  children: JSX.Element;
}

const UseAuth = ({ children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  /* @ts-ignore */
  const from = location?.state?.from?.pathname || '/';

  const { auth, isLoadingAuth } = useAppSelector((state) => ({
    auth: state.auth?.id && state.auth?.role === 'user',
    isLoadingAuth: state.loadingState?.isLoadingAuth,
  }));

  useEffect(() => {
    if (auth) {
      navigate(from, { replace: true });
    }
  }, [auth, from, navigate]);
  return (
    <>
      {isLoadingAuth && <Loading />}
      {children}
    </>
  );
};

export default UseAuth;
