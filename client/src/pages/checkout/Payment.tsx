import { CreditCardOutlined } from '@ant-design/icons';
import { paymentIcons } from 'utils/icons';
import { useState } from 'react';
import CardForm from './components/CardForm';
import PaypalForm from './components/PaypalForm';
import { LockOutlined } from '@ant-design/icons';
import Button from 'components/UI/Button';

const Payment = () => {
  const [paymentType, setPaymentType] = useState('card');
  return (
    <section className="py-10">
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
                className={`flex items-center cursor-pointer p-6 rounded border ${
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
        {paymentType === 'cash' && (
          <div className="flex justify-center align-center p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold fon-main mb-4 capitalize">total: 236.52$</h3>
              <p className="font-secondary text-lg text-primaryDark">Pay at delivery</p>
              <div className="flex items-center mt-8">
                <Button theme="btn-large" className="flex items-center">
                  <LockOutlined className="text-white mr-2" /> Confirm
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Payment;
