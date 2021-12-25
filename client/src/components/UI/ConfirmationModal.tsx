import Button from './Button';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useDialog } from 'react-st-modal';

const ConfirmationModal = () => {
  const dialog = useDialog();
  return (
    <div className="flex items-center justify-center">
      <div className=" max-w-md w-full rounded flex  items-center justify-center p-6">
        <div className="text-center">
          <CheckCircleOutlined className="text-greenBeta text-4xl mb-2" />
          <div className="mb-4">
            <p className="font-main text-xl font-bold text-primaryDark">Order Confirmed Successfully !</p>
          </div>

          <Button onClick={() => dialog.close()} theme="btn-success">
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
