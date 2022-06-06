import { ICart } from 'app/slices/cartSlice';
import { Link } from 'react-router-dom';
// import Button from 'components/UI/Button';

type Props = {
  orderItem: ICart;
  delivered: boolean;
};

const PurchaseItem = ({ orderItem, delivered = false }: Props) => {
  return (
    <li className="py-3 sm:py-4 max-w-xl mx-auto">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="w-16 h-16 rounded" src={orderItem.image} alt={orderItem.title} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 truncate ">{orderItem.title}</p>
          <p className="text-sm text-gray-500 truncate ">${orderItem.price}</p>
        </div>
        <div className="flex-1 font-semibold">
          <p className="text-gray-900">
            <span className="font-bold">Qty:</span> {orderItem.qty}
          </p>
          <p className="text-gray-900 font-bold">${orderItem.price * orderItem.qty}</p>
        </div>
        {delivered && (
          <Link to={`review/${orderItem?.slug}`}>
            <span className="font-bold text-sm text-purpleBeta">rate & review</span>
          </Link>
        )}
      </div>
    </li>
  );
};

export default PurchaseItem;
