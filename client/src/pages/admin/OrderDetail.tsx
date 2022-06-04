import { useAppSelector } from 'app/store';
import { useParams } from 'react-router-dom';
import { useAdminOrder } from 'utils/hooks/useAdminOrder';
import Loading from 'components/loaders/Loading';
import Button from 'components/UI/Button';
import { useDispatch } from 'react-redux';
import { deleteOrderStart, updateOrderStatusStart } from 'app/slices/orderSlice';
import { ChangeEvent } from 'react';

const orderStatus = ['delivered', 'pending', 'on going', 'canceled'];

const OrderDetail = () => {
  const { id } = useParams();
  const orderId = typeof id === 'string' ? id : '';
  const { auth, isLoadingOrder } = useAppSelector((state) => ({
    auth: state.auth,
    isLoadingOrder: state.loadingState.isLoadingOrder,
  }));
  const { isError, isLoading, order } = useAdminOrder(id, auth.token);
  const dispatch = useDispatch();

  const onStatusUpdate = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateOrderStatusStart({ id: orderId, orderStatus: e.target.value, token: auth.token }));
  };

  const onDeleteOrder = () => {
    dispatch(deleteOrderStart({ id: orderId, token: auth.token }));
  };

  return (
    <section className="py-4 max-w-screen-lg mx-auto">
      {(isLoading || isLoadingOrder) && <Loading />}
      {isError && <p className="text-center font-bold">An Error Accured</p>}
      {order && (
        <div className="bg-white p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
          <div className="flex justify-end space-x-4">
            <p className="font-bold self-center">update order status:</p>
            <select
              onChange={onStatusUpdate}
              className="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option selected>choose a status</option>
              {orderStatus
                .filter((status) => status !== order.orderStatus)
                .map((status, index) => (
                  <option key={`${status}-${index}`} value={status}>
                    {status}
                  </option>
                ))}
            </select>
            <Button onClick={onDeleteOrder} theme="btn-err">
              Delete
            </Button>
          </div>
          <div className="border-b border-gray-200 py-5 dark:border-gray-700">
            <h2 className="flex w-full items-center justify-between   py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Shipping info
            </h2>

            {order &&
              Object.keys(order?.shippingInfo).map((key, index) => (
                <div className="flex space-x-4" key={`${key}-${index}`}>
                  <span className="font-bold">{key}:</span>
                  <span>
                    {typeof order?.shippingInfo[key] === 'boolean'
                      ? order?.shippingInfo[key] === true
                        ? 'Yes'
                        : 'No'
                      : order?.shippingInfo[key]}
                  </span>
                </div>
              ))}
          </div>

          <div className="border-b border-gray-200 py-5 dark:border-gray-700">
            <h2 className="flex w-full items-center justify-between   py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Orders list
            </h2>

            {order?.orderItems?.map((item: any) => (
              <div key={`${item._id}`} className="md:grid-cols-1 grid grid-cols-2 gap-8 px-4">
                <div className="flex justify-between items-center">
                  <img src={item.image} alt={item.title} className="object-fit w-20 h-20 rounded" />
                  <p>
                    Title: <span className="ml-2 font-bold">{item.title}</span>
                  </p>
                  <p>
                    Qty: <span className="ml-2 font-bold">{item.qty}</span>{' '}
                  </p>
                  <p>
                    Total Price: <span className="ml-2 font-bold">{item.price * item.qty}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-200 py-5 dark:border-gray-700">
            <h2 className="flex w-full items-center justify-between   py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
              More info
            </h2>
            <p>
              payment Method: <span className="font-bold">{order?.paymentMethod}</span>
            </p>
            <p>
              Order Status: <span className="font-bold">{order?.orderStatus}</span>
            </p>
            <p>
              Order Total: <span className="font-bold">{order?.total} $</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderDetail;
