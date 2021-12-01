import { DeleteOutlined } from '@ant-design/icons';
import Button from 'components/UI/Button';

const WishItem = () => {
  return (
    <div className="grid lg:grid-cols-7 grid-cols-5 shadow-md bg-gray-50 items-center gap-4 p-4">
      <div className=" w-full bg-gray-200 col-span-2 rounded-md h-32 bg-center bg-contain bg-no-repeat"></div>
      <div className="col-span-3">
        <h3 className=" text-sm col-span-3 mb-4">product</h3>
        <h4 className="text-md">$ 12</h4>
      </div>

      <div className="flex lg:flex-col  lg:col-span-2 col-span-5 h-full items-center justify-between">
        <Button theme="btn-dark">add to cart</Button>
        <span className="text-red-500 cursor-pointer text-lg">
          <DeleteOutlined />
        </span>
      </div>
    </div>
  );
};

export default WishItem;
