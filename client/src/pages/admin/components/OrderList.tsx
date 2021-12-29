import Button from 'components/UI/Button';

const OrderList = () => {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      <div className="overflow-x-auto w-full">
        <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead>
            <tr className="text-primaryDark text-left">
              <th className="font-semibold text-sm uppercase px-6 py-4"> Customer </th>
              <th className="font-semibold text-sm uppercase px-6 py-4"> order status </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> paiment status </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> total </th>
              <th className="font-semibold text-sm uppercase px-6 py-4"> </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {new Array(4).fill(null).map((item, index) => (
              <tr>
                <td className="px-6 py-4" key={`row-${index}`}>
                  <div className="flex items-center space-x-3">
                    <p> Mira Rodeo </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Button theme="btn-secondary">pending</Button>
                </td>
                <td className="px-6 py-4 text-center">
                  <Button theme="bg-indigo-500" className="bg-opacity-30 px-2 py-1">
                    unpaid
                  </Button>
                </td>
                <td className="px-6 py-4 text-center"> 125.00 $ </td>
                <td className="px-6 py-4 text-center">view </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
