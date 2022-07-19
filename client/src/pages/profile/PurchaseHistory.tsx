import PurchaseRow from './components/PurchaseRow';
import { useUserProfile } from '@/components/profile';
import { Link } from 'react-router-dom';
import Button from '@/components/UI/Button';
import { useDispatch } from 'react-redux';
import { getOrderStart } from '@/app/slices/orderSlice';

const PurchaseHistory = () => {
  const userProfile = useUserProfile();
  const orders = userProfile[2];
  const auth = userProfile[1];

  const dispatch = useDispatch();

  const ordersTable = ['Date', 'N° Of Products', 'Total Price', 'Status'];
  return (
    <div className="py-6">
      {orders?.length > 0 && (
        <>
          <h3 className="flex justify-between font-semibold text-lg text-primaryDark capitalize  mb-6 pb-2 border-b-2 border-gray-50">
            <span>Purchase history</span>
            <Button onClick={() => dispatch(getOrderStart(auth?.token))} theme="btn-primary">
              get all orders
            </Button>
          </h3>
          <div className="lg:grid hidden grid-cols-6 gap-2  w-full justify-items-center border-b-2 border-gray-100 pb-2 mb-4">
            {ordersTable.map((title, index) => (
              <h3
                key={`${title}-${index}`}
                className={`font-semibold text-gray-700 cursor-pointer capitalize  ${index === 0 && 'col-span-2 '}`}
              >
                {title}
              </h3>
            ))}
          </div>
        </>
      )}
      <div>
        {orders?.length > 0 &&
          orders.map(({ _id, createdAt, orderStatus, orderItems, total }) => (
            <Link to={_id} key={_id}>
              <PurchaseRow
                orderStatus={orderStatus}
                orderItems={orderItems.length}
                total={total}
                createdAt={createdAt}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PurchaseHistory;
