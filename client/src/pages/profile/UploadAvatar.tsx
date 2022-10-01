import { useForm } from 'react-hook-form';
import Button from '@/components/UI/Button';
import { formFormData } from '@/utils/helpers';
import { imageUploadSchema } from '@/utils/formValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { uploadAvatarStart } from '@/app/slices/profileSlice';
import { useAppSelector } from '@/app/store';

type AvatarType = {
  image: File;
};

const UploadAvatar = () => {
  const dispatch = useDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AvatarType>({
    resolver: yupResolver(imageUploadSchema),
  });
  const onSubmit = (data: AvatarType) => {
    const formData = formFormData(data);
    dispatch(uploadAvatarStart({ token, avatar: formData }));
  };
  return (
    <div className="py-6 ">
      <h3 className="font-semibold text-lg text-primaryDark capitalize  mb-6 pb-2 border-b-2 border-gray-50">
        Upload Avatar
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center flex-col space-y-4 p-8 relative"
      >
        <div>
          <label className="block text-base font-semibold text-primaryDark font-secondary mb-2">Avatar</label>
          <input
            className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
            type="file"
            placeholder="Avatar"
            {...register('image')}
          />
        </div>
        <span className="text-red-600">{errors?.image?.message}</span>
        <div>
          <Button type="submit" theme="btn-primary">
            upload
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadAvatar;
