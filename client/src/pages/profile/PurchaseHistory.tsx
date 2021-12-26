import PurchaseRow from './components/PurchaseRow';
import { useUserProfile } from 'components/profile';
import { Link } from 'react-router-dom';

const PurchaseHistory = () => {
  const userProfile = useUserProfile();
  const orders = userProfile[2];

  const ordersTable = ['Date', 'N° Of Products', 'Total Price', 'Status'];
  return (
    <div className="py-6">
      {orders?.length > 0 && (
        <>
          <h3 className="font-semibold text-lg text-primaryDark capitalize  mb-6 pb-2 border-b-2 border-gray-50">
            Purchase history
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
