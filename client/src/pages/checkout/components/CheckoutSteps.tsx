import { DollarOutlined, FormOutlined, OrderedListOutlined } from '@ant-design/icons';
import React from 'react';

interface Props {
  current: number;
}

const CheckoutSteps = ({ current }: Props) => {
  return (
    <div className="w-full py-6">
      <div className="flex ">
        <div className="w-1/3">
          <div className="relative mb-2">
            <div
              className={` ${
                current === 1
                  ? 'bg-white text-primaryDark'
                  : current > 1
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-primaryDark'
              }
            w-10 h-10 mx-auto rounded-full text-lg shadow-md flex justify-center items-center`}
            >
              <OrderedListOutlined className="contents" />
            </div>
          </div>

          <div className="text-xs text-center md:text-base font-main font-semibold text-gray-700">order summary</div>
        </div>

        <div className="w-1/3">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{ width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-full bg-gray-100 rounded items-center align-middle align-center flex-1">
                <div className={` ${current > 1 && 'bg-green-500'} w-0  py-1 rounded `} style={{ width: '100%' }}></div>
              </div>
            </div>

            <div
              className={`
            ${
              current === 2
                ? 'bg-white text-primaryDark'
                : current > 2
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-primaryDark'
            }
            w-10 h-10 mx-auto  rounded-full text-lg shadow-md flex justify-center items-center`}
            >
              <FormOutlined className="contents" />
            </div>
          </div>

          <div className="text-xs text-center md:text-base font-main font-semibold text-gray-700">Billing info</div>
        </div>
        <div className="w-1/3 ">
          <div className="relative mb-2">
            <div
              className="absolute flex align-center items-center align-middle content-center"
              style={{ width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div className={` ${current > 2 && 'bg-green-500'} w-0  py-1 rounded `} style={{ width: '100%' }} />
              </div>
            </div>
            <div
              className={`
            ${
              current === 3
                ? 'bg-white text-primaryDark'
                : current > 3
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-primaryDark'
            }
            w-10 h-10 mx-auto  rounded-full text-lg  flex justify-center items-center`}
            >
              <DollarOutlined />
            </div>
          </div>

          <div className="text-xs text-center md:text-base font-main font-semibold text-gray-700">Payment</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
