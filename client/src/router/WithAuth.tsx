import { ReactElement } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

function WithAuth({ children }: Props): ReactElement {
  const location = useLocation();

  const auth = false;

  if (!auth) return <Navigate to="/login" state={{ from: location }} />;

  return children;
}

export default WithAuth;
