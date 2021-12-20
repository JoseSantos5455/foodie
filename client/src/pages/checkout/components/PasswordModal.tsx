import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import Button from 'components/UI/Button';
import { useState } from 'react';
import { useDialog } from 'react-st-modal';

function PasswordModal() {
  const dialog = useDialog();
  const [showPassword, setShowPassword] = useState(false);

  const [value, setValue] = useState('');

  return (
    <div className="p-6 text-center">
      <div className="relative max-w-md mb-4 mx-auto">
        <input
          className="w-full px-5 py-2 focus:outline-none focus:border-primaryDark border text-gray-700 bg-gray-200 rounded"
          type={showPassword ? 'text' : 'password'}
          placeholder="Your Password"
          aria-label="Password"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute cursor-pointer top-1/2 flex items-center justify-center right-2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <EyeOutlined className="contents text-xl" />
          ) : (
            <EyeInvisibleOutlined className="contents text-xl" />
          )}
        </div>
      </div>
      <Button
        theme="btn-dark"
        type="submit"
        onClick={() => {
          dialog.close(value);
        }}
      >
        Confirm
      </Button>
    </div>
  );
}

export default PasswordModal;
