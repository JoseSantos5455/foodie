import { displayTime } from '@/utils/helpers';

type Props = {
  orderStatus: string;
  orderItems: number;
  total: number;
  createdAt: string;
};

const PuchaseRow = ({ orderStatus, total, orderItems, createdAt }: Props) => {
  return (
    <div className="hover:bg-gray-50 py-4 cursor-pointer grid lg:grid-cols-6 grid-cols-1 gap-2 items-center lg:justify-items-center border-b-2 border-gray-100 ">
      <div className="grid lg:grid-cols-4  w-full  lg:col-span-2">
        <h3 className="font-semibold capitalize flex items-center justify-center space-x-4 w-full text-center col-span-4  font-sm ">
          <span className="text-sm text-gray-600 hover:text-pgray-700">
          {displayTime(createdAt)}
          </span>
         
        </h3>
      </div>
      <div className="lg:block lg:space-x-0 flex items-center space-x-4">
        <span className="font-semibold lg:hidden">N° of Products:</span>
        <p className=" text-sm">{orderItems}</p>
      </div>

      <div className="lg:block lg:space-x-0 flex items-center space-x-4">
        <span className="font-semibold lg:hidden">Total Price:</span>
        <p>{total}</p>
      </div>
      <div className="px-4 bg-blue-100 py-1 justify-self-center rounded-full">
        <h4>{orderStatus}</h4>
      </div>
    </div>
  );
};

export default PuchaseRow;
