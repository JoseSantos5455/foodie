import { CreditCardOutlined } from '@ant-design/icons';
import { paymentIcons } from 'utils/icons';
import { useState } from 'react';
import CardForm from './components/CardForm';
import PaypalForm from './components/PaypalForm';
import DeliveryPay from './components/DeliveryPay';
import WithCart from './components/WithCart';
import { useAppSelector } from 'app/store';
import Loading from 'components/loaders/Loading';

const Payment = () => {
  const [paymentType, setPaymentType] = useState('cash');

  const isLoadingOrder = useAppSelector((state) => state.loadingState.isLoadingOrder);

  return (
    <WithCart>
      <section className="py-10">
        {isLoadingOrder && <Loading />}
        <h1 className="text-center text-3xl font-main font-bold mb-4">Payment</h1>
        <div className=" max-w-screen-md mx-auto bg-white p-4 shadow-md rounded">
          <div className="w-full text-center mb-4">
            <div className="bg-primary text-white overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg flex justify-center items-center">
              <CreditCardOutlined className="text-white text-2xl" />
            </div>
          </div>
          <div className="mb-3 flex ">
            {paymentIcons.map((icon) => (
              <div className="px-2" key={icon.id}>
                <div
                  onClick={() => setPaymentType(icon.name)}
                  className={`flex items-center cursor-pointer p-6 rounded border-2 ${
                    icon.name === paymentType && 'border-primary'
                  }`}
                >
                  <img src={icon.icon} alt={icon.name} className="h-8 ml-3" />
                  <p className="text-base ml-3">{icon.name}</p>
                </div>
              </div>
            ))}
          </div>
          {paymentType === 'card' && <CardForm />}
          {paymentType === 'paypal' && <PaypalForm />}
          {paymentType === 'cash' && <DeliveryPay />}
        </div>
      </section>
    </WithCart>
  );
};

export default Payment;
