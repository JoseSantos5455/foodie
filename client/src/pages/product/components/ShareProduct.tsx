import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons';
import { FC } from 'react';

const ShareProduct: FC = () => {
  return (
    <div>
      <div className="mb-6 pb-2 border-b border-gray-200">
        <h3 className="font-main font-bold">Share Product</h3>
      </div>
      <div className="flex itesm-center text-2xl space-x-4">
        <FacebookFilled style={{ color: '#3B5998' }} />
        <InstagramFilled style={{ color: '#C32AA3' }} />
        <TwitterCircleFilled style={{ color: '#1DA1F2' }} />
      </div>
    </div>
  );
};

export default ShareProduct;
