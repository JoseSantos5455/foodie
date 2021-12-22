import { EditOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { updateProfileStart } from 'app/slices/profileSlice';
import { compareObjs } from 'utils/helpers';
import { IUser } from 'types/types';
import { CustomDialog } from 'react-st-modal';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from 'utils/formValidation';
import PasswordModal from 'pages/checkout/components/PasswordModal';
import { useProfile } from 'components/profile';
import Button from 'components/UI/Button';

const ManageProfile = () => {
  const [profile] = useProfile();
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
    if (profile.id) {
      reset(defaultValues);
    }
  }, [profile, reset, defaultValues]);

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
  };
  return (
    <div className="py-6 ">
      <h3 className="font-semibold text-lg text-primaryDark capitalize  mb-6 pb-2 border-b-2 border-gray-50">
        Profile Info
      </h3>

      <div className=" max-w-screen-md mx-auto">
        <div className="border relative bg-gray-50 shadow-md border-gray-200 rounded p-4">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 p-8 relative">
            <div className="absolute -top-5 right-2 w-10 h-10 rounded-full flex-col text-white bg-black flex justify-center items-center">
              <EditOutlined />
              <span className="text-sm">Edit</span>
            </div>
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
            <div className="col-span-2">
              <Button type="submit" theme="btn-primary">
                update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
