import Button from '@/components/UI/Button';
import { IOrderRes } from '@/types/types';
import { Link } from 'react-router-dom';

type Props = {
  orders: IOrderRes[];
  admin?: boolean;
};

const OrderList = ({ orders, admin = false }: Props) => {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      <div className="overflow-x-auto w-full">
        <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead>
            <tr className="text-primaryDark text-left">
              <th className="font-semibold text-sm uppercase px-6 py-4"> Customer</th>
              <th className="font-semibold text-sm uppercase px-6 py-4"> order status </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> paiment status </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> total </th>

              <th className="font-semibold text-sm uppercase px-6 py-4"> </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order?._id}>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <p> {order?.shippingInfo?.fullName} </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Button theme="btn-secondary">{order?.orderStatus}</Button>
                </td>
                <td className="px-6 py-4 text-center">
                  <Button theme="bg-indigo-500" className="bg-opacity-30 px-2 py-1">
                    {order.isPaid ? 'paid' : 'unpaid'}
                  </Button>
                </td>
                <td className="px-6 py-4 text-center"> {order?.total} $ </td>

                {admin && (
                  <td className="px-6 py-4 text-center">
                    <Link to={`${order._id}`}>
                      <span className="font-bold text-primary hover:text-primaryHover">view</span>
                    </Link>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
