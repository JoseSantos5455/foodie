import Button from 'components/UI/Button';

interface SummaryProps {
  subTotal: number;
  tax?: number;
  delivery: number;
  total: number;
}

const Summary = ({ subTotal, tax, delivery, total }: SummaryProps) => {
  return (
    <div className="rounded border border-gray-200 p-4 shadow-md bg-white">
      <h2 className="font-main text-center font-bold mb-4">Summary</h2>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-secondary capitalize">Sub Total</h4>
        <p className="font-bold">{subTotal}$</p>
      </div>
      {tax && (
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-secondary capitalize">tax</h4>
          <p className="font-bold">{tax}$</p>
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-secondary capitalize">delivery</h4>
        <p className="font-bold">{delivery}$</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-secondary capitalize">Total</h4>
        <p className="font-bold">{total}$</p>
      </div>
      <Button theme="btn-primary" className="w-full uppercase">
        process to checkout
      </Button>
    </div>
  );
};

export default Summary;
