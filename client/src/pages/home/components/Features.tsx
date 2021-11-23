import { GiftFilled, StarFilled } from '@ant-design/icons';

const Features = () => {
  const features = [
    { name: 'gift', icon: <GiftFilled className="text-4xl text-purpleBeta" /> },
    { name: 'gift', icon: <StarFilled className="text-4xl text-yellowBeta" /> },
    { name: 'gift', icon: <GiftFilled className="text-4xl text-greenBeta" /> },
    { name: 'gift', icon: <GiftFilled className="text-4xl text-primary" /> },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 items-center">
      {features.map((item, index) => (
        <button
          key={`${item.name}-${index}`}
          className="flex items-center rounded-lg hover:bg-gray-50 shadow-md justify-center py-2 bg-white space-x-4"
        >
          <span>{item.icon}</span>
          <span className="font-main text-xl font-medium">{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Features;
