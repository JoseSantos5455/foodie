import { useAppSelector } from 'app/store';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_DASHBOARD } from 'utils/routes';
import Loading from 'components/loaders/Loading';


interface Props {
  children: JSX.Element;
}

const UseAuth = ({ children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  /* @ts-ignore */
  const from = location?.state?.from?.pathname || '/';


  const { isUser, isAdmin } = useAppSelector((state) => ({
    isUser: state.auth?.id && state.auth?.role === 'user',
    isAdmin: state.auth?.id && state.auth?.role === 'admin',
    isLoadingAuth: state.loadingState?.isLoadingAuth,
  }));

  useEffect(() => {
    if (isUser) {
      navigate(from, { replace: true });
    } else if (isAdmin) {
      navigate(ADMIN_DASHBOARD, { replace: true });
    }
  }, [isUser, isAdmin, from, navigate]);
 
  return (
    <>
      {isLoadingAuth && <Loading />}
      {children}
    </>
  );
};

export default UseAuth;
