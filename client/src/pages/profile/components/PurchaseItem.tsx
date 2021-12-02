import Button from 'components/UI/Button';

const PurchaseItem = () => {
  return (
    <div className="grid mb-4 lg:grid-cols-7 grid-cols-5 shadow-md bg-gray-50 items-center gap-4 p-4">
      <div className=" w-full bg-gray-200 col-span-2 rounded-md h-32 bg-center bg-contain bg-no-repeat"></div>
      <div className="col-span-3">
        <h3 className=" text-sm col-span-3 mb-4">product</h3>
        <h4 className="text-md">$ 12</h4>
      </div>

      <div className="flex lg:flex-col  lg:col-span-2 col-span-5 h-full items-center justify-between">
        <Button theme="btn-success">Delivered</Button>
        <span className="underline font-bold text-darkPrimary">Edit</span>
      </div>
    </div>
  );
};

export default PurchaseItem;
