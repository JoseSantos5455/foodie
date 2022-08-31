import { useParams } from 'react-router-dom';
import { useUserProfile } from '@/components/profile';
import PurchaseItem from './components/PurchaseItem';

const OrderDetails = () => {
  const { orderId } = useParams();
  const userProfile = useUserProfile();
  const orders = userProfile[2];
  const foundOrder = orders.find((order) => order._id === orderId);
  return (
    <div className="py-6">
      <h3 className="font-semibold text-lg text-primaryDark capitalize  mb-6 pb-2 border-b-2 border-gray-50">
        Order Details
      </h3>
      <ul className="divide-y divide-gray-200">
        {foundOrder &&
          foundOrder.orderItems.map((orderItem) => (
            <PurchaseItem
              delivered={foundOrder.orderStatus === 'delivered'}
              key={orderItem.productId}
              orderItem={orderItem}
            />
          ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
