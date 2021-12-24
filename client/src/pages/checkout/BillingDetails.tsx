import Button from 'components/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { CHECKOUT_STEP_2, CHECKOUT_STEP_3 } from 'utils/routes';
import CheckoutSteps from './components/CheckoutSteps';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from 'utils/formValidation';
import { useAppSelector } from 'app/store';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileStart, updateProfileStart } from 'app/slices/profileSlice';
import { compareObjs } from 'utils/helpers';
import { IUser } from 'types/types';
import { CustomDialog } from 'react-st-modal';
import PasswordModal from './components/PasswordModal';
import WithCart from './components/WithCart';

const BillingDetails = () => {
  const navigate = useNavigate();
  const { profile, auth } = useAppSelector((state) => ({
    profile: state.profile,
    auth: state.auth,
  }));

  const dispatch = useDispatch();

  const defaultValues = useMemo(
    () => ({
      fullName: profile?.fullName,
      email: profile?.email,
      phone: profile?.phone,
      city: profile?.city,
      address: profile?.address,
      zipCode: profile?.zipCode,
    }),
    [profile],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues,
  });

  useEffect(() => {
    if (!profile.id) {
      dispatch(getProfileStart(auth?.token));
    }
    if (profile.id) {
      reset(defaultValues);
    }
  }, [profile, dispatch, auth.token, reset, defaultValues]);

  const onSubmit = async (data: Partial<IUser>) => {
    const updates = compareObjs(data, defaultValues);

    if (Object.keys(updates).length !== 0) {
      if (updates.email) {
        const result = await CustomDialog(<PasswordModal />, {
          title: 'Enter your password',
          showCloseIcon: true,
        });

        if (!result) {
          alert('you must enter password to change email');
          return;
        } else {
          updates.password = result;
          updates.token = profile.token;
          dispatch(updateProfileStart(updates));
        }
      } else {
        updates.token = profile.token;
        dispatch(updateProfileStart(updates));
      }
    }
    navigate(CHECKOUT_STEP_3);
  };

  return (
    <WithCart>
      <section className="py-10">
        <h1 className="text-center text-3xl font-main font-bold mb-4">Billing Details</h1>
        <div className=" max-w-screen-md mx-auto bg-white p-4 shadow-md rounded">
          <CheckoutSteps current={2} />
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 p-8">
            <div>
              <label className="block text-sm text-primaryDark font-secondary mb-1">Full Name</label>
              <input
                className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Your Name"
                aria-label="Name"
                {...register('fullName')}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.fullName?.message}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-primaryDark font-secondary mb-1">Email</label>
              <input
                className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
                type="email"
                placeholder="Your Email"
                aria-label="email"
                {...register('email')}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.email?.message}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-primaryDark font-secondary mb-1">Phone</label>
              <input
                className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
                type="phone"
                placeholder="Your phone number"
                aria-label="phone"
                {...register('phone')}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.phone?.message}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-primaryDark font-secondary mb-1">City</label>
              <input
                className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Your city"
                aria-label="city"
                {...register('city')}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.city?.message}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-primaryDark font-secondary mb-1">Address</label>
              <input
                className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Your address"
                aria-label="address"
                {...register('address')}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.address?.message}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-primaryDark font-secondary mb-1">zip code</label>
              <input
                className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Your postal code"
                aria-label="postal code"
                {...register('zipCode')}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.zipCode?.message}</span>
              </div>
            </div>

            <div className="flex justify-between mt-6 items-center col-span-2">
              <Button theme="btn-outline-rounded">
                <Link to={CHECKOUT_STEP_2}>Back </Link>
              </Button>
              <Button type="submit" theme="btn-rounded">
                Continue
              </Button>
            </div>
          </form>
        </div>
      </section>
    </WithCart>
  );
};

export default BillingDetails;
