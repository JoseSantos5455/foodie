import { LockOutlined } from '@ant-design/icons';
import Button from '@/components/UI/Button';
import { useForm } from 'react-hook-form';
import useOrder from '@/utils/hooks/useOrder';
import { addOrderStart } from '@/app/slices/orderSlice';
import ConfirmationModal from '@/components/UI/ConfirmationModal';
import { CustomDialog } from 'react-st-modal';

const PaypalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { newOrder, token, dispatch } = useOrder();

  const onSubmit = (data: any) => {
    newOrder.paymentMethod = 'paypal';
    dispatch(addOrderStart({ newOrder, token }));
    CustomDialog(<ConfirmationModal />, {
      title: 'Confirm',
      showCloseIcon: true,
    });
  };

  return (
    <form className="md:p-4 p-2" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-red-500 font-bold p-4 text-center">Feature not available yet</p>
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1">Email</label>
        <div>
          <input
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
            placeholder="John Smith"
            type="email"
            {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
          />
          <div>
            {errors.email?.type === 'pattern' && <span className="text-red-600">please enter a valid email</span>}
            {errors.email?.type === 'required' && <span className="text-red-600">this field is required</span>}
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1">Password</label>
        <div>
          <input
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
            placeholder="John Smith"
            type="password"
            {...register('span', { required: true })}
          />
          <div>{errors.password && <span className="text-red-600">this field is required</span>}</div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button theme="btn-large" className="flex items-center">
          <LockOutlined className="text-white mr-2" /> Confirm
        </Button>
      </div>
    </form>
  );
};

export default PaypalForm;
