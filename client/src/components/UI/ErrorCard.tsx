import Button from './Button';
import { CloseCircleOutlined } from '@ant-design/icons';
import { clearErrors } from '@/app/slices/errorSlice';
import { useDispatch } from 'react-redux';

type ErrorProps = {
  message: string;
};

const ErrorCard = ({ message }: ErrorProps) => {
  const dispatch = useDispatch();

  return (
    <div
      className={` fixed h-screen w-screen top-0 left-0 flex items-center justify-center`}
      style={{ background: 'rgba(0,0,0,.6)' }}
    >
      <div className=" max-w-md w-full rounded bg-white shadow-md flex  items-center justify-center p-6">
        <div className="text-center">
          <CloseCircleOutlined className="text-red-600 text-4xl mb-2" />
          <div className="mb-4">
            <p className="font-main text-xl font-bold text-primaryDark">{message}</p>
          </div>

          <Button
            theme="btn-err"
            onClick={() => {
              dispatch(clearErrors());
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
