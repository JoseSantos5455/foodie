import { ICart } from 'app/slices/cartSlice';
// import Button from 'components/UI/Button';

type Props = {
  orderItem: ICart;
};

const PurchaseItem = ({ orderItem }: Props) => {
  return (
    <div className="grid mb-4 lg:grid-cols-6 grid-cols-5 shadow-md bg-gray-50 items-center max-w-xl mx-auto gap-4 p-4">
      <img src={orderItem.image} alt={orderItem.title} className="object-fit rounded col-span-3" />
      <div className="col-span-2">
        <h3 className=" text-sm  mb-4">{orderItem.title}</h3>
        <h4 className="text-md">$ {orderItem.price}</h4>
      </div>

      <div className="flex lg:flex-col  lg:col-span-1  h-full items-center justify-between">
        {/* <Button theme="btn-success"></Button> */}
        <span className="underline font-bold text-darkPrimary">Edit</span>
      </div>
    </div>
  );
};

export default PurchaseItem;
