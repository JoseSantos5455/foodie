import { LockOutlined } from '@ant-design/icons';
import { addOrderStart } from '@/app/slices/orderSlice';
import Button from '@/components/UI/Button';
import useOrder from '@/utils/hooks/useOrder';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PURCHASE_HISTORY } from '@/utils/routes';

const DeliveryPay = ({ orderSuccess }: { orderSuccess: boolean }) => {
  const { newOrder, token, dispatch } = useOrder();
  const navigate = useNavigate();

  const onConfirm = () => {
    newOrder.paymentMethod = 'cash';
    dispatch(addOrderStart({ newOrder, token }));
  };

  useEffect(() => {
    if (orderSuccess) navigate(`/profile/${PURCHASE_HISTORY}`);
  }, [orderSuccess]);
  return (
    <div className="flex justify-center align-center p-8">
      <div className="text-center">
        <h3 className="text-xl font-bold fon-main mb-4 capitalize">total: 236.52$</h3>
        <p className="font-secondary text-lg text-primaryDark">Pay at delivery</p>
        <div className="flex items-center mt-8">
          <Button onClick={onConfirm} theme="btn-large" className="flex items-center">
            <LockOutlined className="text-white mr-2" /> Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPay;
