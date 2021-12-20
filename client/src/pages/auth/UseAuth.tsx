import React from 'react';
import { useAppSelector } from 'app/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface Props {
  children: JSX.Element;
}

const UseAuth = ({ children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const auth = useAppSelector((state) => state.auth?.id && state.auth?.role === 'user');

  useEffect(() => {
    if (auth) {
      navigate(from, { replace: true });
    }
  }, [auth, from, navigate]);
  return <>{children}</>;
};

export default UseAuth;
