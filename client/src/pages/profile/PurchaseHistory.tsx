import PurchaseRow from './components/PurchaseRow';
import { useUserProfile } from '@/components/profile';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HOME } from '@/utils/routes';
import emptyOrder from '@/assets/empty-order.svg';

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
      {orders?.length === 0 && (
        <div className="flex items-center justify-center">
          <div className="flex flex-col text-center space-y-4">
            <img className="w-80 h-auto" src={emptyOrder} alt="empty order" />
            <p className="text-secondary text-gray-600">There are no orders yet.</p>
            <Link to={HOME}>
              <span className="inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm  text-white font-bold hover:bg-primaryHover bg-primary focus:outline-none focus:ring-2 focus:ring-primaryHover focus:ring-offset-2">
                Shop now
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseHistory;
