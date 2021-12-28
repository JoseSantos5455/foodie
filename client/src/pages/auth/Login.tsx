import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import Button from 'components/UI/Button';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'utils/formValidation';
import { Link } from 'react-router-dom';
import { SIGN_UP } from 'utils/routes';
import { useDispatch } from 'react-redux';
import { loginStart } from 'app/slices/authSlice';
import { ILoginCredentiels } from 'types/types';
import UseAuth from './UseAuth';
import { useAppSelector } from 'app/store';
import { loadingAuth } from 'app/slices/loadingSlice';
import { authError } from 'app/slices/errorSlice';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();

  const isErrorAuth = useAppSelector((state) => state.errorState.isErrorAuth);

  const onSubmit = (data: ILoginCredentiels) => {
    dispatch(loginStart(data));
  };

  useEffect(() => {
    dispatch(loadingAuth(false));
    dispatch(authError(null));
  }, [dispatch]);

  return (
    <UseAuth>
      <section className="py-10">
        <h1 className="text-center text-3xl font-main font-bold mb-4">Login</h1>
        <div className=" max-w-lg mx-auto bg-white p-4 shadow-md rounded">
          {isErrorAuth && <p className=" text-center font-bold text-xl p-2 text-red-600">{isErrorAuth?.message}</p>}
          <form className="p-4 mb-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label className="block text-sm text-primaryDark font-secondary mb-1">Email</label>
              <input
                className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
                type="email"
                placeholder="Your Email"
                aria-label="Email"
                {...register('email')}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.email?.message}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-primaryDark font-secondary mb-1">Password</label>
              <div className="relative">
                <input
                  className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your Password"
                  aria-label="Password"
                  {...register('password')}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer top-1/2 flex items-center justify-center right-2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOutlined className="contents text-xl" />
                  ) : (
                    <EyeInvisibleOutlined className="contents text-xl" />
                  )}
                </div>
              </div>
              <div className="mt-1">
                <span className="text-red-600">{errors?.password?.message}</span>
              </div>
            </div>
            <p className="font-secondary text-sm text-greenBeta mb-6 mt-2">Forget Your Password ?</p>
            <div className="flex justify-center">
              <Button theme="btn-large">Login</Button>
            </div>
          </form>
          <p className="font-secondary text-base px-4 font-semibold">
            Don't have an acoount ?{' '}
            <Link to={SIGN_UP} className="underline">
              Create account
            </Link>
          </p>
        </div>
      </section>
    </UseAuth>
  );
};

export default Login;
