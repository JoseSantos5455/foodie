import { ReactElement } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from 'app/store';

interface Props {
  children: JSX.Element;
}

function WithAdmin({ children }: Props): ReactElement {
  const location = useLocation();
  const auth = useAppSelector((state) => state.auth?.id && state.auth?.role === 'admin');

  if (!auth) return <Navigate to="/login" state={{ from: location }} />;

  return children;
}

export default WithAdmin;
