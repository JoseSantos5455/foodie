import { LockOutlined } from '@ant-design/icons';
import Button from '@/components/UI/Button';
import { useForm } from 'react-hook-form';
import useOrder from '@/utils/hooks/useOrder';
import { addOrderStart } from '@/app/slices/orderSlice';
import ConfirmationModal from '@/components/UI/ConfirmationModal';
import { CustomDialog } from 'react-st-modal';

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { newOrder, token, dispatch } = useOrder();

  const onSubmit = (data: any) => {
    newOrder.paymentMethod = 'card';
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
        <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
        <div>
          <input
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
            placeholder="John Smith"
            type="text"
            {...register('nameOnCard', { required: true })}
          />
          <div>{errors.nameOnCard && <span className="text-red-600">This field is required</span>}</div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-x-4 gap-y-4 mb-3">
        <div className="md:col-span-2">
          <label className="font-bold text-sm mb-2 ml-1">Card number</label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
              placeholder="0000 0000 0000 0000"
              type="text"
              {...register('CardNumber', { required: true })}
            />
            <div>{errors.CardNumber && <span className="text-red-600">This field is required</span>}</div>
          </div>
        </div>
        <div>
          <label className="font-bold text-sm mb-2 ml-1">Security code</label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
              placeholder="000"
              type="number"
              {...register('Cvv', { required: true })}
            />
            <div>{errors.Cvv && <span className="text-red-600">This field is required</span>}</div>
          </div>
        </div>
      </div>
      <div className="mb-3 -mx-2 flex items-end">
        <div className="px-2 md:w-1/2">
          <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
          <div>
            <select
              {...register('expirationMonth', { required: true })}
              className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors cursor-pointer"
            >
              <option value="01">01 - January</option>
              <option value="02">02 - February</option>
              <option value="03">03 - March</option>
              <option value="04">04 - April</option>
              <option value="05">05 - May</option>
              <option value="06">06 - June</option>
              <option value="07">07 - July</option>
              <option value="08">08 - August</option>
              <option value="09">09 - September</option>
              <option value="10">10 - October</option>
              <option value="11">11 - November</option>
              <option value="12">12 - December</option>
            </select>
            <div>{errors.expirationMonth && <span className="text-red-600">This field is required</span>}</div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <select
            {...register('expirationYear', { required: true })}
            className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors cursor-pointer"
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
          </select>
          <div>{errors.expirationYear && <span className="text-red-600">This field is required</span>}</div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button theme="btn-large" className="flex items-center">
          <LockOutlined className="text-white mr-2" /> Confirm
        </Button>
      </div>
    </form>
  );
};

export default CardForm;
