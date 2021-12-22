import { LockOutlined } from '@ant-design/icons';
import Button from 'components/UI/Button';

const PaypalForm = () => {
  return (
    <form className="p-4">
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1">Email</label>
        <div>
          <input
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
            placeholder="John Smith"
            type="email"
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1">Password</label>
        <div>
          <input
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
            placeholder="John Smith"
            type="password"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button theme="btn-large" className="flex items-center">
          <LockOutlined className="text-white mr-2" /> Confirm
        </Button>
      </div>
    </form>
  );
};

export default PaypalForm;
