import { useAppSelector } from '@/app/store';
import { adminGetOrderStart } from '@/app/slices/orderSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import OrderList from './components/OrderList';
import Select from 'react-select';

const orderStatus = [
  { value: null, label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'canceled', label: 'Canceled' },
  { value: 'on going', label: 'On Going' },
];

const AllOrders = () => {
  const { orders, auth } = useAppSelector((state) => ({
    orders: state.orders,
    auth: state.auth,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(adminGetOrderStart(auth.token));
    }
  }, [dispatch, orders.length, auth.token]);

  const [currentStatus, setCurrentStatus] = useState('');

  const selectedOrders = currentStatus ? orders.filter((order) => order.orderStatus === currentStatus) : orders;

  const onStatusChange = (selectedStatus: any) => setCurrentStatus(selectedStatus.value);

  return (
    <section className="py-6">
      {orders.length > 0 && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-bold font-primary text-2xl mb-4 capitalize">All Orders</h1>
            <div className="flex space-x-4 items-center w-40 min-w-min">
              <span className="font-primary font-bold">Filter</span>
              <Select
                className="appearance-none w-full text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                onChange={onStatusChange}
                defaultValue={orderStatus[0]}
                name="order Status"
                options={orderStatus}
              />
            </div>
          </div>
          {selectedOrders.length > 0 && <OrderList admin orders={selectedOrders} />}
        </>
      )}
    </section>
  );
};

export default AllOrders;
